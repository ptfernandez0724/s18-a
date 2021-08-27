let movies = {


			titles: [


				{
					title: 'Avengers',
					genre: 'Action',
					releasedDate: Date(2012,3,11),
					rating: 4.5

				},

			 
				
				{
					title: 'Spiderman: Homecoming',
					genre: 'Action-Adventure',
					releasedDate: Date(2017,5,28),
					rating: 4.7
				}, 

			
				{
					title: 'Thor',
					genre: 'Action-Adventure',
					releasedDate: Date(2011,4,6),
					rating: 4.1
				},

			
			
				{
					title: 'Ironman',
					genre: 'Action-Adventure',
					releasedDate: Date(2008,4,2),
					rating: 4.6
				},

 
			
				{
					title: 'Captain America: The First Avenger',
					genre: 'Action-Adventure',
					releasedDate: Date(2011,6,22),
					rating: 4.8
				},

			],

		

			displayRating: function(i) {
				
				return 'The movie ' + this.titles[i].title + ' has ' + this.titles[i].rating + ' stars.';

			},

			showAllMovies: function(i) {

				for (let i=0; i<this.titles.length; i++) {
					console.log(this.titles[i].title + ' is an ' + this.titles[i].genre + ' movie');
				}

			}
}

		

					






// function showAllMovies(arr){
// 	console.log(movies[i].toString())
// }

			

			



		
