fetch('https://jsonplaceholder.typicode.com/comments?postId=1')
  .then(response => response.json())
  .then(data => {
      data.forEach(row => {
          const tr = document.createElement("tr");

          const postId = document.createElement("td");
          const id = document.createElement("td");
          const name = document.createElement("td");
          const email = document.createElement("td");
          const body = document.createElement("td");

          const postIdText = document.createTextNode(row.postId);
          const idText = document.createTextNode(row.id);
          const nameText = document.createTextNode(row.name);
          const emailText = document.createTextNode(row.email);
          const bodyText = document.createTextNode(row.body);

          postId.appendChild(postIdText);
          id.appendChild(idText);
          name.appendChild(nameText);
          email.appendChild(emailText);
          body.appendChild(bodyText);

          tr.appendChild(postId);
          tr.appendChild(id);
          tr.appendChild(name);
          tr.appendChild(email);
          tr.appendChild(body);

          const tableBody = document.getElementById("table-body");
          
          tableBody.appendChild(tr);
      });
  });