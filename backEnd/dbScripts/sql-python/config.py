import os

settings = {
    'host': os.environ.get('ACCOUNT_HOST', 'https://ds519zhang.documents.azure.com:443/'),
    'master_key': os.environ.get('ACCOUNT_KEY', 'ywTl8cDhHkbYETziizjqsxTt31y3ohg1T6zLBfWgtJOkGq2eG69Sov8h8KwP2nXaodnW3qVkcoshACDbc4vFMA=='),
    'database_id': os.environ.get('COSMOS_DATABASE', 'warehouse'),
    'container_id': os.environ.get('COSMOS_CONTAINER', 'shippingData')
}

sampleItems = {
    "1": {
    "id": "1",
    "Date": "Mar 9, 2022",
    "WarehouseID": "a908cef7-4c67-40f3-88f7-08a03ba4104e",
    "ShippingPO": "81d06bd2-39e3-427c-9fb3-4e217b9a4d60",
    "ShipmentID": "1",
    "BoxesRcvd": "12",
    "ShipperID": "Zhang",
    'partitionKey': 'ass4item'
    },
    "2": {
    "id": "2",
    "Date": "Mar 10, 2022",
    "WarehouseID": "a908cef7-4c67-40f3-88f7-08a03ba4104e",
    "ShippingPO": "71b720e3-2847-45de-bbe7-8fa099d64632",
    "ShipmentID": "2",
    "BoxesRcvd": "2",
    "ShipperID": "Zhang",
    'partitionKey': 'ass4item'
    },
    "3": {
        "id": "3",
    "Date": "Mar 11, 2022",
    "WarehouseID": "a908cef7-4c67-40f3-88f7-08a03ba4104e",
    "ShippingPO": "3f7b2654-052d-4a4e-905f-87f22a3877a9",
    "ShipmentID": "3",
    "BoxesRcvd": "5",
    "ShipperID": "Zhang"  ,
    'partitionKey': 'ass4item'
    },
    "4": {"id": "4",
    "Date": "Mar 10, 2022",
    "WarehouseID": "a908cef7-4c67-40f3-88f7-08a03ba4104e",
    "ShippingPO": "71b720e3-2847-45de-bbe7-8fa654d65425",
    "ShipmentID": "4",
    "BoxesRcvd": "10",
    "ShipperID": "Zhang"  ,
    'partitionKey': 'ass4item'
    },
    "5": {
        "id": "5",
    "Date": "Mar 11, 2022",
    "WarehouseID": "a908cef7-4c67-40f3-88f7-08a03ba4104e",
    "ShippingPO": "71b720e3-2847-45de-bbe7-8fa099d68291",
    "ShipmentID": "5",
    "BoxesRcvd": "2",
    "ShipperID": "Zhang",
    'partitionKey': 'ass4item'
    },
    "6": {
        "id": "6",
    "Date": "June 12, 2023",
    "WarehouseID": "a908cef7-4c67-40f3-88f7-08a03ba4104a",
    "ShippingPO": "post6-8",
    "ShipmentID": "6",
    "BoxesRcvd": "12",
    "ShipperID": "Duan",
    'partitionKey': 'ass4item'
    },
    "7": {
        "id": "7",
    "Date": "June 12, 2023",
    "WarehouseID": "a908cef7-4c67-40f3-88f7-08a03ba4104a",
    "ShippingPO": "post6-8",
    "ShipmentID": "7",
    "BoxesRcvd": "12",
    "ShipperID": "Duan",
    'partitionKey': 'ass4item'
    },
    "8": {
        "id": "8",
    "Date": "June 12, 2023",
    "WarehouseID": "a908cef7-4c67-40f3-88f7-08a03ba4104a",
    "ShippingPO": "post6-8",
    "ShipmentID": "8",
    "BoxesRcvd": "12",
    "ShipperID": "Duan",
    'partitionKey': 'ass4item'
    },
    "9": {
        "id": "9",
    "Date": "June 15, 2023",
    "WarehouseID": "a908cef7-4c67-40f3-88f7-08a03ba4104e",
    "ShippingPO": "post9-10",
    "ShipmentID": "9",
    "BoxesRcvd": "12",
    "ShipperID": "Jimmy",
    'partitionKey': 'ass4item'
    },
    "10": {
        "id": "10",
    "Date": "June 15, 2023",
    "WarehouseID": "a908cef7-4c67-40f3-88f7-08a03ba4104e",
    "ShippingPO": "post9-10",
    "ShipmentID": "10",
    "BoxesRcvd": "12",
    "ShipperID": "Jimmy",
    'partitionKey': 'ass4item'
    }

}