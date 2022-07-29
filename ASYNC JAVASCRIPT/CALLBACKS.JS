const div1=document.createElement('div');

div1.id='div1';

document.body.appendChild(div1);

console.log(document.body);

const div2=document.createElement('div');

div2.id='div2';

document.body.appendChild(div2);





const posts=[

  {title:'post one', body:'this is post one',createdAt:new Date().getTime()},

  {title:'post two', body:'this is post two',createdAt:new Date().getTime()}

];

let intervalId;
let intervalId2;

function getPost(){

  clearInterval(intervalId);

  intervalId=setInterval(()=>{

    let output='';

    setTimeout(()=>{

      posts.forEach((post)=>{

         output+= `<li>${post.title} created ${Math.floor((new Date().getTime()-post.createdAt)/1000)} seconds ago</li>` ;

      })

         document.getElementById('div1').innerHTML=output;

    },1000)

  },1000)

}



function createPost(post,callback=getPost){

  setTimeout(()=>{

    posts.push({...post, createdAt : new Date().getTime()});

    callback();

    lastEdited();

  },2000)

  

}

function create4thPost(callback){

   let post={title: 'post four',body:'this is post four'};

   callback(post);

}

function lastEdited(){

  clearInterval(intervalId2);

  intervalId2=setInterval(()=>{

    document.getElementById('div2').innerHTML=`last edited ${Math.floor((new Date().getTime()-posts[posts.length-1].createdAt)/1000)} seconds ago`;

  },1000)
}
createPost({title:'post three', body:'this is post three'},getPost);
create4thPost(createPost);
