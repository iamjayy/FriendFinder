//create array of objects
//name, photo, scores
//score will be a array of 10 numbers that will be summed and compared to the sum of the score that the user put into the form
var friends = [
    {
      name: "Black Widow",
      photo: "https://static3.cbrimages.com/wordpress/wp-content/uploads/2019/05/Black-Widow-2.jpg",
      scores: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]
    },
    {
        name: "Captain Marvel",
        photo: "https://m.media-amazon.com/images/M/MV5BODlhOGM4MGMtYjBjMi00MWQ2LTk4OWUtYzQ2YzE0NWZkODlkXkEyXkFqcGdeQW1yb3NzZXI@._V1_CR251,0,1419,798_AL_UY268_CR84,0,477,268_AL_.jpg",
        scores: [3, 2, 6, 4, 5, 1, 2, 5, 4, 1]
      },
      {
        name: "Wasps",
        photo: "https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/e/e9/Textless_AMATW_Character_Posters_02.jpg/revision/latest/scale-to-width-down/2000?cb=20180731232106",
        scores: [1, 3, 5, 2, 3, 3, 3, 3, 3, 1]
      },
      {
        name: "Scarlett Witch",
        photo: "https://s1.ibtimes.com/sites/www.ibtimes.com/files/styles/lg/public/2015/03/31/scarlet-witch.jpg",
        scores: [1, 1, 4, 4, 4, 4, 4, 3, 1, 1]
      },
      {
        name: "Gamora",
        photo: "https://www.syfy.com/sites/syfy/files/styles/1200x680/public/wire/legacy/Gamora.jpg",
        scores: [2, 2, 2, 2, 2, 1, 2, 5, 4, 1]
      },
      {
        name: "Valkyrie",
        photo: "https://i.kinja-img.com/gawker-media/image/upload/s--yGdOzrPx--/c_scale,f_auto,fl_progressive,q_80,w_800/prm0zxcl6rygclcjojdi.png",
        scores: [1, 1, 4, 4, 1, 1, 2, 5, 5, 1]
      },
];

//export
module.exports = friends;