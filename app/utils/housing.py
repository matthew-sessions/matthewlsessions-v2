import difflib


class DynamicNameSearch:
    non_zip_set = set()
    non_zip_mapping = {}
    zip_set = set()
    zip_mapping = {}
    id_type_mapping = {}

    @classmethod
    def load_data(cls, data) -> None:
        search_term = data.get("regionName")

        region_id = data.get("_id")
        region_type = data.get("regionType")
        cls.id_type_mapping[region_id] = region_type
        state = data.get("regionState")

        if region_type.lower() == "zip":
            cls.zip_set.add(search_term)
            cls.zip_mapping[search_term] = cls.pack_value(
                region_id, search_term, region_type, state, state
            )
        else:
            search_term_e = f"{search_term} {state}".lower()
            cls.non_zip_set.add(search_term_e)
            cls.non_zip_mapping[search_term_e] = cls.pack_value(
                region_id, search_term, region_type, state, state
            )

    @classmethod
    def pack_value(cls, region_id, region_name, region_type, st, state) -> dict:
        return {
            "RegionID": region_id,
            "RegionName": region_name,
            "RegionType": region_type,
            "st": st,
            "state": state,
        }

    @classmethod
    def search(cls, target) -> list:
        try:
            int(target)
            target_arr = difflib.get_close_matches(target.lower(), cls.zip_set)
            return [cls.zip_mapping[word] for word in target_arr]
        except:
            target_arr = difflib.get_close_matches(target.lower(), cls.non_zip_set)
            return [cls.non_zip_mapping[word] for word in target_arr]
