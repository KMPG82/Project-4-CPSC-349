/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3uw4lgst1qgzk6c")

  // remove
  collection.schema.removeField("oig0azes")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "caxnw8u6",
    "name": "name",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3uw4lgst1qgzk6c")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "oig0azes",
    "name": "name",
    "type": "editor",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "convertUrls": false
    }
  }))

  // remove
  collection.schema.removeField("caxnw8u6")

  return dao.saveCollection(collection)
})
