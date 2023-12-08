/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3uw4lgst1qgzk6c")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "q4rxkae3",
    "name": "isListedForTrade",
    "type": "bool",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3uw4lgst1qgzk6c")

  // remove
  collection.schema.removeField("q4rxkae3")

  return dao.saveCollection(collection)
})
