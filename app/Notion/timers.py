from app.utils.mongo import Mongoify
from app.Notion.manager import NotionClient
from app.Notion.result_manager import Result

FILTER = f = {
    "filter": {
        "or": [
            {
                "property": "update",
                "checkbox": {"equals": True},
            },
        ]
    }
}


async def pull_segments():
    results = NotionClient.query_database("c049ad03dd754fa2accff73a2ed2352d", FILTER)
    results = results.json().get("results")
    for result in results:
        id = result.get("id")
        props = result.get("properties")
        res = Result(id=id, **props)
        res.collect_page()
        print(res.prep())
        await Mongoify.update("segments", {"key": id}, res.prep())
