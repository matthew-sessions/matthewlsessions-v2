from dataclasses import dataclass, field
from typing import Optional, List
from app.Notion.manager import NotionClient


@dataclass
class Result:
    id: str
    description: dict
    type: dict
    update: dict
    link: dict
    title: dict
    picture: dict
    orderkey: dict
    info: Optional[list] = field(default_factory=list)
    content: list = field(default_factory=list)

    @property
    def description_str(self):
        return self.parse_text(self.description)

    @property
    def orderkey_str(self):
        return self.parse_text(self.orderkey)

    @staticmethod
    def parse_text(blob):
        typ = blob.get("type")
        text = blob.get(typ)
        if isinstance(text, list) and len(text) > 0:
            return (text[0].get("text", {}) or {}).get("content")
        if isinstance(text, dict) and len(text.get("text")) > 0:
            holder = text.get("text", {}) or {}
            return (holder[0].get("text", {}) or {}).get("content")
        return None

    @property
    def type_str(self):
        return (self.type.get("select", {}) or {}).get("name")

    @property
    def update_str(self):
        return self.update.get("checkbox")

    @property
    def link_str(self):
        return self.link.get("url")

    @property
    def picture_str(self):
        return self.picture.get("url")

    @property
    def title_str(self):
        return self.parse_text(self.title)

    def collect_page(self):
        blocks = NotionClient.get_block_children(self.id)
        blocks = blocks.json().get("results")
        collecting_info = True
        for obj in blocks:
            obj = self.parse_obj(obj)
            if len(obj) == 0:
                continue
            if "divider" in obj:
                collecting_info = False
            elif collecting_info:
                self.info.append(obj)
            else:
                self.content.append(obj)

    def prep(self):
        return {
            "key": self.id,
            "description": self.description_str,
            "type": self.type_str,
            "link": self.link_str,
            "title": self.title_str,
            "info": self.info,
            "content": self.content,
            "picture": self.picture_str,
            "orderkey": self.orderkey_str,
        }

    def parse_obj(self, blob):
        typ = blob.get("type")
        if typ in ["paragraph", "bulleted_list_item"]:
            return {typ: self.parse_text(blob)}
        if typ == "divider":
            return {typ: True}
        return {}
