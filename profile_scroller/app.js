const data = [
  {
    name: "Mustafa Kaan",
    age: "25",
    gender: "male",
    lookingfor: "female",
    location: "Konya",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
  },
  {
    name: "Ahmet Saati",
    age: "22",
    gender: "male",
    lookingfor: "female",
    location: "Ankara",
    image: "https://randomuser.me/api/portraits/men/65.jpg",
  },
  {
    name: "Ezgi Ozgu",
    age: "19",
    gender: "female",
    lookingfor: "male",
    location: "Van",
    image: "https://randomuser.me/api/portraits/women/75.jpg",
  },
  {
    name: "Zeynep Zurnutu",
    age: "32",
    gender: "female",
    lookingfor: "male",
    location: "Izmir",
    image: "https://randomuser.me/api/portraits/women/62.jpg",
  },
];

const profiles = profileIterator(data);

// Call first Profile
nextProfile();
// Next event
document.getElementById("next").addEventListener("click", nextProfile);

function nextProfile() {
  const currentProfile = profiles.next().value;
  if (currentProfile !== undefined) {
    document.getElementById("profileDisplay").innerHTML = `
    <ul class="list-group">
      <li class="list-group-item">Name:${currentProfile.name}</li>
      <li class="list-group-item">Age:${currentProfile.age}</li>
      <li class="list-group-item">Location:${currentProfile.location}</li>
      <li class="list-group-item">Preference:${currentProfile.gender} looking for ${currentProfile.lookingfor}</li>
    </ul>
    `;

    document.getElementById("imageDisplay").innerHTML = `
    <img src="${currentProfile.image}"/>
    `;
  } else {
    window.location.reload();
  }
}

//Profile Iterator
function profileIterator(profiles) {
  let nextIndex = 0;

  return {
    next: function () {
      return nextIndex < profiles.length
        ? { value: profiles[nextIndex++], done: false }
        : { done: true };
    },
  };
}
