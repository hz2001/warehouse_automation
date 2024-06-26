import azure.cosmos.documents as documents
import azure.cosmos.cosmos_client as cosmos_client
import azure.cosmos.exceptions as exceptions
from azure.cosmos.partition_key import PartitionKey
import datetime

import config

HOST = config.settings['host']
MASTER_KEY = config.settings['master_key']
DATABASE_ID = config.settings['database_id']
CONTAINER_ID = config.settings['container_id']
itemsToCreate= config.sampleItems

def add_items(container, itemsToCreate: dict[str, dict[str, str]]):
    print('\nCreating Items\n')

    for (key, val) in itemsToCreate.items():
        container.create_item(body=val)



def run_sample():
    client = cosmos_client.CosmosClient(HOST, {'masterKey': MASTER_KEY}, user_agent="CosmosDBPythonQuickstart", user_agent_overwrite=True)
    try:
        # setup database for this sample
        try:
            db = client.get_database_client(DATABASE_ID)
            print('Database with id \'{0}\' was found'.format(DATABASE_ID))
        except exceptions.CosmosResourceNotFoundError:
            db = client.create_database(id=DATABASE_ID)
            print('Database with id \'{0}\' created'.format(DATABASE_ID))

        # setup container for this sample
        try:
            container = db.get_container_client(CONTAINER_ID)
            print('Container with id \'{0}\' was found'.format(CONTAINER_ID))
        
        except exceptions.CosmosResourceNotFoundError:
            container = db.create_container(id=CONTAINER_ID, partition_key=PartitionKey(path='/partitionKey'))
            print('Container with id \'{0}\' created'.format(CONTAINER_ID))

        add_items(container=container, itemsToCreate=itemsToCreate)
        # scale_container(container)
        # read_item(container, 'SalesOrder1', 'Account1')
        # read_items(container)
        # query_items(container, ';')
        # replace_item(container, 'SalesOrder1', 'Account1')
        # upsert_item(container, 'SalesOrder1', 'Account1')
        # delete_item(container, 'SalesOrder1', 'Account1')

        # cleanup database after sample
        # try:
        #     client.delete_database(db)

        # except exceptions.CosmosResourceNotFoundError:
        #     pass

    except exceptions.CosmosHttpResponseError as e:
        print('\nrun_sample has caught an error. {0}'.format(e.message))

    finally:
            print("\nrun_sample done")


if __name__ == '__main__':
    run_sample()



# def create_items(container):
#     print('\nCreating Items\n')

#     # Create a SalesOrder object. This object has nested properties and various types including numbers, DateTimes and strings.
#     # This can be saved as JSON as is without converting into rows/columns.
#     # id1 = get_sales_order()
#     # container.create_item(body=id1)

#     # As your app evolves, let's say your object has a new schema. You can insert SalesOrderV2 objects without any
#     # changes to the database tier.
#     id2 = get_sales_order_v2()
#     print(id2)
#     container.create_item(body=id2)

# def scale_container(container):
#     print('\nScaling Container\n')
    
#     # You can scale the throughput (RU/s) of your container up and down to meet the needs of the workload. Learn more: https://aka.ms/cosmos-request-units
#     try:
#         offer = container.read_offer()
#         print('Found Offer and its throughput is \'{0}\''.format(offer.offer_throughput))

#         offer.offer_throughput += 100
#         container.replace_throughput(offer.offer_throughput)

#         print('Replaced Offer. Offer Throughput is now \'{0}\''.format(offer.offer_throughput))
    
#     except exceptions.CosmosHttpResponseError as e:
#         if e.status_code == 400:
#             print('Cannot read container throuthput.');
#             print(e.http_error_message);
#         else:
#             raise;

# def read_item(container, doc_id, account_number):
#     print('\nReading Item by Id\n')

#     # We can do an efficient point read lookup on partition key and id
#     response = container.read_item(item=doc_id, partition_key=account_number)

#     print('Item read by Id {0}'.format(doc_id))
#     print('Partition Key: {0}'.format(response.get('partitionKey')))
#     print('Subtotal: {0}'.format(response.get('subtotal')))


# def read_items(container):
#     print('\nReading all items in a container\n')

#     # NOTE: Use MaxItemCount on Options to control how many items come back per trip to the server
#     #       Important to handle throttles whenever you are doing operations such as this that might
#     #       result in a 429 (throttled request)
#     item_list = list(container.read_all_items(max_item_count=10))

#     print('Found {0} items'.format(item_list.__len__()))

#     for doc in item_list:
#         print('Item Id: {0}'.format(doc.get('id')))


# def query_items(container, account_number):
#     print('\nQuerying for an  Item by Partition Key\n')

#     # Including the partition key value of account_number in the WHERE filter results in a more efficient query
#     items = list(container.query_items(
#         query="SELECT * FROM r WHERE r.partitionKey=@account_number",
#         parameters=[
#             { "name":"@account_number", "value": account_number }
#         ]
#     ))

#     print('Item queried by Partition Key {0}'.format(items[0].get("id")))


# def replace_item(container, doc_id, account_number):
#     print('\nReplace an Item\n')

#     read_item = container.read_item(item=doc_id, partition_key=account_number)
#     read_item['subtotal'] = read_item['subtotal'] + 1
#     response = container.replace_item(item=read_item, body=read_item)

#     print('Replaced Item\'s Id is {0}, new subtotal={1}'.format(response['id'], response['subtotal']))


# def upsert_item(container, doc_id, account_number):
#     print('\nUpserting an item\n')

#     read_item = container.read_item(item=doc_id, partition_key=account_number)
#     read_item['subtotal'] = read_item['subtotal'] + 1
#     response = container.upsert_item(body=read_item)

#     print('Upserted Item\'s Id is {0}, new subtotal={1}'.format(response['id'], response['subtotal']))


# def delete_item(container, doc_id, account_number):
#     print('\nDeleting Item by Id\n')

#     response = container.delete_item(item=doc_id, partition_key=account_number)

#     print('Deleted item\'s Id is {0}'.format(doc_id))


# def get_sales_order(item_id):
#     order1 = {'id' : item_id,
#             'partitionKey' : 'ass4item',
#             'purchase_order_number' : 'PO18009186470',
#             'order_date' : datetime.date(2005,1,10).strftime('%c'),
#             'subtotal' : 419.4589,
#             'tax_amount' : 12.5838,
#             'freight' : 472.3108,
#             'total_due' : 985.018,
#             'items' : [
#                 {'order_qty' : 1,
#                     'product_id' : 100,
#                     'unit_price' : 418.4589,
#                     'line_price' : 418.4589
#                 }
#                 ],
#             'ttl' : 60 * 60 * 24 * 30
#             }

#     return order1


# def get_sales_order_v2():
#     # notice new fields have been added to the sales order
#     id1 = {
#     "id": "2",
#     "Date": "Mar 10, 2022",
#     "WarehouseID": "a908cef7-4c67-40f3-88f7-08a03ba4104e",
#     "ShippingPO": "71b720e3-2847-45de-bbe7-8fa099d64632",
#     "ShipmentID": "2",
#     "BoxesRcvd": "2",
#     "ShipperID": "Zhang"
#     }

#     return id1

# def run_sample():
#     client = cosmos_client.CosmosClient(HOST, {'masterKey': MASTER_KEY}, user_agent="CosmosDBPythonQuickstart", user_agent_overwrite=True)
#     try:
#         # setup database for this sample
#         try:
#             db = client.create_database(id=DATABASE_ID)
#             print('Database with id \'{0}\' created'.format(DATABASE_ID))

#         except exceptions.CosmosResourceExistsError:
#             db = client.get_database_client(DATABASE_ID)
#             print('Database with id \'{0}\' was found'.format(DATABASE_ID))

#         # setup container for this sample
#         try:
#             container = db.create_container(id=CONTAINER_ID, partition_key=PartitionKey(path='/partitionKey'))
#             print('Container with id \'{0}\' created'.format(CONTAINER_ID))

#         except exceptions.CosmosResourceExistsError:
#             container = db.get_container_client(CONTAINER_ID)
#             print('Container with id \'{0}\' was found'.format(CONTAINER_ID))

        # scale_container(container)
        # delete_item(container, '2', 'ass4item')
#         create_items(container)
        # read_item(container, 'SalesOrder1', 'Account1')
        # read_items(container)
        # query_items(container, 'Account1')
        # replace_item(container, 'SalesOrder1', 'Account1')
        # upsert_item(container, 'SalesOrder1', 'Account1')
        

#         # cleanup database after sample
#         # try:
#         #     client.delete_database(db)

#         # except exceptions.CosmosResourceNotFoundError:
#         #     pass

#     except exceptions.CosmosHttpResponseError as e:
#         print('\nrun_sample has caught an error. {0}'.format(e.message))

#     finally:
#             print("\nrun_sample done")


# if __name__ == '__main__':
#     run_sample()
