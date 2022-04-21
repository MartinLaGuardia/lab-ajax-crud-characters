const charactersAPI = new APIHandler('https://minions-api.herokuapp.com/');

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {

    charactersAPI

      .getFullList()
      .then(response => {

        let text
        response.data.forEach(eachCharacter => {
          text +=

            `<div class= "character-info">
        <div class="name">${eachCharacter.name}</div>
        <div class="occupation">${eachCharacter.cartoon}</div>
        <div class="cartoon">${eachCharacter.id}</div>
        <div class="weapon">${eachCharacter.weapon}</div>
      </div>`

          document.querySelector('.characters-container').innerHTML = text

        })

      }).catch(err => console.log(err));

  })
})

document.getElementById('fetch-one').addEventListener('click', function (event) {

  charactersAPI

    .getOneRegister(registerId)
    .then(elm => {
      let text
      response.data(registerId => {
        text +=


          `< div class="operation" >
            <label for="character-id">${registerId}</label>
            <input type="text" name="character-id">
              <button id="fetch-one">Fetch one</button>
          </div>`

        document.querySelector('.operation').innerHTML = result


      });

      document.getElementById('delete-one').addEventListener('click', function (event) {


      });

      document.getElementById('edit-character-form').addEventListener('submit', function (event) {

      });

      document.getElementById('new-character-form').addEventListener('submit', function (event) {

      });
