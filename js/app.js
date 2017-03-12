
(function (){


	var app = angular.module('store', []);

	app.controller('StoreController', function(){
		
		this.products = gems;
	});

	app.controller('PanelController', function(){
		
		this.tab = 1;


		this.selectTab = function(setTab){

			this.tab = setTab;
		};


		this.isSelected = function(checkTab) {
			return this.tab === checkTab;
		};
	});

	app.controller('ReviewController', function(){
		this.review = {};

		this.addReview = function(product){
			product.reviews.push(this.review);

		};
	});


	var gems = [{

			name : 'Dodecahedron',
			price: 2.9,
			description: 'This is a gem. This is a gem',
			canPurchase: true,
			soldOut: false,
			images: [

					{

						full: 'img/dodecahedron-01-full.jpg',
						thumb: 'img/dodecahedron-01-thumb.jpg'
					},
					{
						full: 'img/dodecahedron-02-full.jpg',
						thumb: 'img/dodecahedron-02-thumb.jpg'

					}


			],
			reviews: [
					{

						stars: 5,
						body: 'I love the product',
						author: 'joe@gmail.com'
					},
					{
						stars: 3,
						body: 'Not that good',
						author: 'jane@gmail.com'

					}





			]



	},

	{

			name : 'Pentago',
			price: 5.95,
			description: 'This is a gem. This is a gem',
			canPurchase: true,
			soldOut: false,
			images: [

					{

						full: 'img/pentago-01-full.jpg',
						thumb: 'img/pentago-01-thumb.jpg'
					},
					{
						full: 'img/pentago-02-full.jpg',
						thumb: 'img/pentago-02-thumb.jpg'

					}


			],
			reviews: [
					{

						stars: 5,
						body: 'I love the product',
						author: 'joe@gmail.com'
					},
					{
						stars: 3,
						body: 'Not that good',
						author: 'jane@gmail.com'

					}





			]

	}]






})();


