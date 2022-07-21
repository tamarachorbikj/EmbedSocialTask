const data = [
  {
    image: "https://placekitten.com/600/400",
    caption:
      "Duis in facilisis lectus. Nulla molestie erat erat, quis tempor enim sodales vitae. Sed tempus, libero fringilla rhoncus ullamcorper, justo elit dignissim ex, nec elementum quam sem in urna.",
    type: "image",
    source_type: "facebook",
    source_link: "https://www.facebook.com/EmbedSocial/",
    date: "2018-03-12 03:00:00",
    likes: "123",
    name: "John Smith",
    profile_image: "https://placekitten.com/g/100/100",
  },
  {
    image: "https://placekitten.com/600/410",
    caption:
      "Quisque metus nisi, consequat et molestie eget, facilisis ac odio. Nam lorem libero, efficitur ac velit at, egestas tempor arcu. Nullam pharetra ex eget orci lobortis malesuada. Maecenas eget porta felis. Aliquam porttitor, nibh nec ullamcorper fermentum, eros velit lobortis justo, pretium consectetur turpis enim ut nunc. Fusce convallis, ex ut ultrices sodales, ante quam venenatis arcu, vitae mollis magna urna vel eros. Aliquam a sapien nisi. Nullam convallis malesuada suscipit. ",
    type: "image",
    source_type: "instagram",
    source_link: "https://instagram.com/embedsocial/",
    date: "2019-01-12 03:00:00",
    likes: "0",
    name: "John Smith",
    profile_image: "https://placekitten.com/g/150/100",
  },
  {
    image: "https://placekitten.com/600/420",
    caption: "",
    type: "image",
    source_type: "facebook",
    source_link: "https://instagram.com/embedsocial/",
    date: "2017-01-21 03:00:00",
    likes: "9866555",
    name: "John Smith",
    profile_image: "https://placekitten.com/g/100/150",
  },
  {
    image: "https://placekitten.com/600/430",
    caption:
      "Etiam eu blandit nisi. Aliquam rutrum faucibus mauris, sed egestas odio viverra at. In elementum sit amet sapien vitae bibendum.",
    type: "image",
    source_type: "facebook",
    source_link: "https://www.facebook.com/EmbedSocial/",
    date: "2019-12-12 03:00:00",
    likes: "2",
    name: "John Smith",
    profile_image: "https://placekitten.com/g/120/120",
  },
  {
    image: "https://placekitten.com/600/440",
    caption:
      "Vivamus a sem sit amet nisi pretium pretium. Curabitur blandit ut lectus non bibendum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris leo odio, consectetur a lorem vitae, aliquet placerat orci. Phasellus varius ante sit amet quam mollis, eu efficitur tortor blandit.",
    type: "image",
    source_type: "facebook",
    source_link: "https://instagram.com/embedsocial/",
    date: "2018-04-12 03:00:00",
    likes: "12343",
    name: "John Smith",
    profile_image: "https://placekitten.com/g/50/50",
  },
  {
    image: "https://placekitten.com/600/440",
    caption:
      "Duis in facilisis lectus. Nulla molestie erat erat, quis tempor enim sodales vitae. Sed tempus, libero fringilla rhoncus ullamcorper, justo elit dignissim ex, nec elementum quam sem in urna.",
    type: "image",
    source_type: "facebook",
    source_link: "https://www.facebook.com/EmbedSocial/",
    date: "2019-12-12 03:00:00",
    likes: "123",
    name: "John Smith",
    profile_image: "https://placekitten.com/g/101/101",
  },
  {
    image: "https://placekitten.com/800/400",
    caption:
      "Duis in facilisis lectus. Nulla molestie erat erat, quis tempor enim sodales vitae. Sed tempus, libero fringilla rhoncus ullamcorper, justo elit dignissim ex, nec elementum quam sem in urna.",
    type: "image",
    source_type: "facebook",
    source_link: "https://www.facebook.com/EmbedSocial/",
    date: "2019-12-12 03:00:00",
    likes: "12",
    name: "John Smith",
    profile_image: "https://placekitten.com/g/150/120",
  },
  {
    image: "https://placekitten.com/600/500",
    caption:
      "Vivamus a sem sit amet nisi pretium pretium. Curabitur blandit ut lectus non bibendum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris leo odio, consectetur a lorem vitae, aliquet placerat orci. Phasellus varius ante sit amet quam mollis, eu efficitur tortor blandit.",
    type: "image",
    source_type: "facebook",
    source_link: "https://instagram.com/embedsocial/",
    date: "2017-12-12 03:00:00",
    likes: "23",
    name: "John Smith",
    profile_image: "https://placekitten.com/g/140/140",
  },
  {
    image: "https://placekitten.com/700/400",
    caption:
      "Pellentesque lacinia volutpat turpis non fermentum. Cras at pellentesque augue. Aliquam eget metus sit amet turpis consectetur posuere.",
    type: "image",
    source_type: "facebook",
    source_link: "https://www.facebook.com/EmbedSocial/",
    date: "2017-12-08 03:00:00",
    likes: "0",
    name: "John Smith",
    profile_image: "https://placekitten.com/g/100/100",
  },
  {
    image: "https://placekitten.com/700/500",
    caption:
      "Duis in facilisis lectus. Nulla molestie erat erat, quis tempor enim sodales vitae. Sed tempus, libero fringilla rhoncus ullamcorper, justo elit dignissim ex, nec elementum quam sem in urna.",
    type: "image",
    source_type: "facebook",
    source_link: "https://www.facebook.com/EmbedSocial/",
    date: "2019-02-12 03:00:00",
    likes: "0",
    name: "John Smith",
    profile_image: "https://placekitten.com/g/102/102",
  },
  {
    image: "https://placekitten.com/800/600",
    caption:
      "Aliquam odio libero, malesuada et iaculis a, facilisis bibendum dolor. Vivamus ultricies congue arcu eu porttitor. Integer libero tortor, volutpat a purus id, mattis tristique tortor. ",
    type: "image",
    source_type: "facebook",
    source_link: "https://www.facebook.com/EmbedSocial/",
    date: "2019-12-12 03:00:00",
    likes: "2",
    name: "John Smith",
    profile_image: "https://placekitten.com/g/103/100",
  },
  {
    image: "https://placekitten.com/700/600",
    caption: "Duis in facilisis lectus.",
    type: "image",
    source_type: "facebook",
    source_link: "https://instagram.com/embedsocial/",
    date: "2020-12-12 03:00:00",
    likes: "1",
    name: "John Smith",
    profile_image: "https://placekitten.com/g/40/100",
  },
  {
    image: "https://placekitten.com/1600/1400",
    caption:
      "Nulla molestie erat erat, quis tempor enim sodales vitae. Sed tempus, libero fringilla rhoncus ullamcorper, justo elit dignissim ex, nec elementum quam sem in urna.",
    type: "image",
    source_type: "facebook",
    source_link: "https://www.facebook.com/EmbedSocial/",
    date: "2019-12-15 03:00:00",
    likes: "2324",
    name: "John Smith",
    profile_image: "https://placekitten.com/g/80/100",
  },
  {
    image: "https://placekitten.com/1600/400",
    caption:
      "Aliquam odio libero, malesuada et iaculis a, facilisis bibendum dolor.",
    type: "image",
    source_type: "facebook",
    source_link: "https://www.facebook.com/EmbedSocial/",
    date: "2019-10-12 03:00:00",
    likes: "1223",
    name: "John Smith",
    profile_image: "https://placekitten.com/g/80/80",
  },
  {
    image: "https://placekitten.com/2000/4000",
    caption:
      "Quis tempor enim sodales vitae. Sed tempus, libero fringilla rhoncus ullamcorper, justo elit dignissim ex, nec elementum quam sem in urna.",
    type: "image",
    source_type: "facebook",
    source_link: "https://instagram.com/embedsocial/",
    date: "2016-12-12 03:00:00",
    likes: "12223",
    name: "John Smith",
    profile_image: "https://placekitten.com/g/110/110",
  },
  {
    image: "https://placekitten.com/900/600",
    caption:
      " Suspendisse finibus lorem nibh, facilisis ullamcorper nunc consequat sit amet. Curabitur ultricies magna ante, ac eleifend lorem auctor porta. Nullam volutpat aliquet lorem, et posuere ex aliquet eu. Quisque elementum sem mauris, a mattis est scelerisque vitae. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut quis massa eget ligula euismod sagittis id congue quam. Duis vestibulum eros sed tincidunt rutrum. Pellentesque in malesuada velit.",
    type: "image",
    source_type: "facebook",
    source_link: "https://www.facebook.com/EmbedSocial/",
    date: "2017-12-12 03:00:00",
    likes: "0",
    name: "John Smith",
    profile_image: "https://placekitten.com/g/110/100",
  },
  {
    image: "https://placekitten.com/600/410",
    caption:
      "Quisque metus nisi, consequat et molestie eget, facilisis ac odio. Nam lorem libero, efficitur ac velit at, egestas tempor arcu. Nullam pharetra ex eget orci lobortis malesuada. Maecenas eget porta felis. Aliquam porttitor, nibh nec ullamcorper fermentum, eros velit lobortis justo, pretium consectetur turpis enim ut nunc. Fusce convallis, ex ut ultrices sodales, ante quam venenatis arcu, vitae mollis magna urna vel eros. Aliquam a sapien nisi. Nullam convallis malesuada suscipit. ",
    type: "image",
    source_type: "instagram",
    source_link: "https://instagram.com/embedsocial/",
    date: "2019-01-12 03:00:00",
    likes: "0",
    name: "John Smith",
    profile_image: "https://placekitten.com/g/150/100",
  },
  {
    image: "https://placekitten.com/600/420",
    caption: "",
    type: "image",
    source_type: "facebook",
    source_link: "https://instagram.com/embedsocial/",
    date: "2017-01-21 03:00:00",
    likes: "9866555",
    name: "John Smith",
    profile_image: "https://placekitten.com/g/100/150",
  },
  {
    image: "https://placekitten.com/600/430",
    caption:
      "Etiam eu blandit nisi. Aliquam rutrum faucibus mauris, sed egestas odio viverra at. In elementum sit amet sapien vitae bibendum.",
    type: "image",
    source_type: "facebook",
    source_link: "https://www.facebook.com/EmbedSocial/",
    date: "2019-12-12 03:00:00",
    likes: "2",
    name: "John Smith",
    profile_image: "https://placekitten.com/g/120/120",
  },
  {
    image: "https://placekitten.com/600/440",
    caption:
      "Vivamus a sem sit amet nisi pretium pretium. Curabitur blandit ut lectus non bibendum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris leo odio, consectetur a lorem vitae, aliquet placerat orci. Phasellus varius ante sit amet quam mollis, eu efficitur tortor blandit.",
    type: "image",
    source_type: "facebook",
    source_link: "https://instagram.com/embedsocial/",
    date: "2018-04-12 03:00:00",
    likes: "12343",
    name: "John Smith",
    profile_image: "https://placekitten.com/g/50/50",
  },
];

const months = {
  0: "Jan",
  1: "Feb",
  2: "Mar",
  3: "Apr",
  4: "May",
  5: "Jun",
  6: "Jul",
  7: "Aug",
  8: "Sept",
  9: "Oct",
  10: "Nov",
  11: "Dec",
};

const makeDate = (date) => {
  const getDate = new Date(date);
  return (
    getDate.getDay() +
    " " +
    months[getDate.getMonth()] +
    " " +
    getDate.getFullYear()
  );
};

const pageElements = 4;
let loadedCards = [];
let currentPage = 0;

const getHeader = (infoCard) => {
  return `<div class="header">
               <div class="user">
                    <div class="profile_image">
                         <img src="${
                           infoCard.profile_image
                         }" alt="" class="profile">
                    </div> 

                    <div class="datename">
                         <div class="name">
                              ${infoCard.name}
                         </div>

                         <div class="date">
                              ${makeDate(infoCard.date)}
                         </div>
                    </div>
               </div>

               <div class="logoPosition"> 
                    <a href="${
                      infoCard.source_type == "facebook"
                        ? "https://www.facebook.com/EmbedSocial/"
                        : "https://instagram.com/embedsocial/"
                    }">
                         <img src="./${
                           infoCard.source_type == "facebook"
                             ? "facebook.svg"
                             : "instagram-logo.svg"
                         }" alt="" class="logo"> 
                    </a>
               </div>
          </div>`;
};

const getNewCards = (infoCard, index) => {
  return `
     <li class="card" id="data-${index}">
          ${getHeader(infoCard)}
          <div class="page-pic" onclick="openWindow(this, ${index})">
               <img src="${infoCard.image}" alt="" class="picture">
          </div>

          <div class="description">
               ${infoCard.caption}
          </div>
          
          <div class="likes">
               <hr />
               <img src="./heart.svg" onclick="check(this, ${index}, 'likes')" />
               <span>
                    ${infoCard.likes}
               </span>
          </div>
     </li>
     `;
};

let loadMore = () => {
  for (
    let i = currentPage * pageElements;
    i < Math.min(currentPage * pageElements + pageElements, data.length);
    i++
  ) {
    loadedCards.push({
      ...data[i],
      isLiked: false,
    });
    document.getElementById("pageId").innerHTML += getNewCards(
      loadedCards[i],
      i
    );
  }
  currentPage++;
  if (loadedCards.length === data.length) {
    document.getElementById("loadId").remove();
  }
};
loadMore();

function openWindow(un, dos) {
  let infoCard = loadedCards[dos];
  let post = document.getElementById("postId");
  let body = document.getElementsByTagName("body")[0];

  if (post.style.display === "none") {
    post.style.display = "flex";
  } else {
    post.style.display = "none";
  }

  post.innerHTML = `
     <div class="postCard">
          <div class="imageLeft">
              <img src=${infoCard.image} />
           </div>

          <div class="textRight">
               ${getHeader(infoCard)}
               <hr />
               <div class="postCardDescription">
               ${infoCard.caption}
          </div>
          
          <div class="postCardLike">
               <img src="./heart.svg" onclick="check(this, ${dos}, 'postCardLike')" />
               <span>
                    ${infoCard.likes}
               </span>
          </div>
          </div> 
     </div>`;

  loadedCards[dos].isLiked &&
    document
      .querySelector(`div.postCardLike > img`)
      .classList.toggle("heartColor");
}

const check = (un, dos, tres) => {
  loadedCards[dos].isLiked = !loadedCards[dos].isLiked;

  document
    .querySelector(
      `${
        tres === "likes"
          ? `#data-${dos} div.${tres} > img`
          : `div.${tres} > img`
      }`
    )
    .classList.toggle("heartColor");
  const countingLikes = +loadedCards[dos].likes;
  loadedCards[dos].likes = countingLikes + (loadedCards[dos].isLiked ? +1 : -1);

  document.querySelector(
    `${
      tres === "likes"
        ? `#data-${dos} div.${tres} > span`
        : `div.${tres} > span`
    }`
  ).innerHTML = loadedCards[dos].likes;
};
