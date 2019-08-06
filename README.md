# HelperMethods
# JavaScript Helper Methods
Method Signatures

returnHTML(element, attrs, child)

example: 

`document.getElementById("root").appendChild(
  returnHTML(
    "div",
    {
      "className1" : "class",
      "className2": "class",
      "className3": "class",
      "idname" : "id"
    },
    "Hello, I am the new HTML"
  )
);`
