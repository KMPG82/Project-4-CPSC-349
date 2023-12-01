/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3uw4lgst1qgzk6c")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "u9zftics",
    "name": "hit_points",
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

  // remove
  collection.schema.removeField("u9zftics")

  return dao.saveCollection(collection)
})
