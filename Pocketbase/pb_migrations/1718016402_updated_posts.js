/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("bb7au8mnf1jfr6y")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "clckgoxb",
    "name": "quantity",
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
  const collection = dao.findCollectionByNameOrId("bb7au8mnf1jfr6y")

  // remove
  collection.schema.removeField("clckgoxb")

  return dao.saveCollection(collection)
})
