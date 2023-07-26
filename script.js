
// const url = 'https://cat-fact.herokuapp.com/facts'
// async function getCats() {
//     const res = await fetch(url)
//     const data = await res.json()
//     console.log(data)
//     const container = document.getElementById('container');
//     data.forEach(function(fact) {
//                    console.log(fact);
//                    const childDiv = document.createElement('div');
//                    childDiv.classList.add('catfacts');
//                    const text = document.createElement('p');
//                    text.classList.add('text');
//                    const div = document.createElement('div');
//                    div.classList.add('para');
//                    const user = document.createElement('p');
//                    const date = document.createElement('p');
//                    text.innerHTML = fact.text;
//                    date.innerHTML = 'Created on:'+ ' ' + fact.createdAt.slice(0,10);
//                    user.innerHTML = 'Created by:' + ' ' + fact.user;
//                    div.append(user);
//                    div.append(date);
//                    childDiv.append(text);
//                    childDiv.append(div);
//                    container.append(childDiv)

//                 });
// }

// getCats()

// function getData() {
//     fetch('https://cat-fact.herokuapp.com/facts')
//     .then(function(res) {
//         return res.json();
//     })
//     .then(function(data) {
//         console.log(data);
//         const body = document.getElementById('container');
//         let output = '<p>Cat facts</p>';
//         data.forEach(function(fact) {
//            output += `
//            <div>
//              <p>${fact.text}</p>
//            </div>
//            ` 
//         });
//         body.append(output)
//     })
// }

// getData()

const url = 'https://cat-fact.herokuapp.com/facts'

async function getCats() {
   const res = await fetch(url)
   const data = await res.json()
   console.log(data);
   const container = document.getElementById('container');
   data.forEach((fact => {
      console.log(fact);
      const childDiv = document.createElement('div');
      childDiv.classList.add('catfacts');
      const text = document.createElement('p');
      text.classList.add('text');
      const div = document.createElement('div');
      div.classList.add('para');
      const user = document.createElement('p');
      const date = document.createElement('p');
      text.innerHTML = fact.text;
      user.innerHTML = 'Created by:' +' ' + fact.user;
      date.innerHTML = 'Created on:' + ' ' + fact.createdAt.slice(0,10);
      div.append(user);
      div.append(date);
      childDiv.append(text);
      childDiv.append(div);
      container.append(childDiv);
   }))
};

getCats();