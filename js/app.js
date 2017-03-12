
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


			]

	}]






})();


