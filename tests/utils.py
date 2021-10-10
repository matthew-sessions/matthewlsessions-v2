import uuid

BASE_DATA = {"users": [{"email": "test@email.com"}]}


class DBInterface(dict):
    def __init__(self):
        for key, val in BASE_DATA.items():
            self[key] = val

    def find_one(self, table, query):
        if table not in self:
            self[table] = []
        return self.scan(table, query)

    def insert(self, table, data):
        if table not in self:
            self[table] = []
        self[table].append({**data, **{"_id": str(uuid.uuid1())}})

    def update(self, table, query, update):
        if table not in self:
            self[table] = []
        for i, data in enumerate(self[table]):
            status = True
            for key, value in query.items():
                if data.get(key) != value:
                    status = False
            if status:
                put = {**data, **update}
                self[table][i] = put
                return put

        update["_id"] = str(uuid.uuid1())
        put = {**query, **update}
        self[table].append(put)
        return put

    def scan(self, table, query):
        for data in self[table]:
            status = True
            for key, value in query.items():
                if data.get(key) != value:
                    status = False
            if status:
                return data

    def scan(self, table, query):
        for data in self[table]:
            status = True
            for key, value in query.items():
                if data.get(key) != value:
                    status = False
            if status:
                return data
