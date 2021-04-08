package handlers

import "time"

type Product struct {
	ID          int     `json:"id"`
	Name        string  `json:"name"`
	Description string  `json:"description"`
	Price       float32 `json:"price"`
	ImageURL    string  `json:"image_url"`
	CreatedOn   string  `json:"-"`
	UpdatedOn   string  `json:"-"`
	DeletedOn   string  `json:"-"`
}

// Get request for all products: /
func GetProducts() []*Product {
	return productList
}

// Get request to get product by id : ?product/<product_id>
func GetProductByID(productID int) *Product {
	for _, e := range productList {
		if e.ID == productID {
			// return the product
			return e
		}
	}
	return nil
}

var productList = []*Product{
	&Product{
		ID:   1,
		Name: "Impala Quad Roller Skates",
		Description: `A brilliant recreational skate, the Impala Quads come in a range of stylish colours, and is designed with a classic figure style boot.
		 The high top lace up boot provides great support, and has light padding for comfort which will break in as you use them to form to the foot. 
		 Constructed from high quality components such as the Aluminium alloy trucks as well as Urethane wheels and stoppers the Impala Quad Roller Skate 
		 gives you a superb all round performance at a great price.`,
		ImageURL:  "https://skatehut.images.blucommerce.com/skatehut/product/Skates/impala-quad-roller-skates-black.webp?auto=format%2Ccompress&bluhash=da7b78a5c918ca3abdcd31e4e2b4eb75&w=1500&h=1500&fit=fillmax&fill=solid&s=4359fae422590ccbb3021a64fcd0a1ae",
		Price:     94.95,
		CreatedOn: time.Now().UTC().String(),
		UpdatedOn: time.Now().UTC().String(),
	},
	&Product{
		ID:   2,
		Name: "SFR Plasma Adjustable Inline Skates",
		Description: `Featuring ABEC5 Carbon Bearings and an adjustable chassis, the SFR Plasma Adjustable Skates
		 are built to last and perfect for children with growing feet.`,
		ImageURL:  "https://skatehut.images.blucommerce.com/skatehut/product/Inline%20Skates/sfr-plasma-adjustable-roller-blades-black-red-00.jpg?auto=format%2Ccompress&bluhash=5ce04ac242fbdf8251774a21f83bed19&w=1500&h=1500&fit=fillmax&fill=solid&s=d5774ffb6436351124b5ce2850749778",
		Price:     44.95,
		CreatedOn: time.Now().UTC().String(),
		UpdatedOn: time.Now().UTC().String(),
	},
	&Product{
		ID:   3,
		Name: "Penny Ocean Mist Complete Cruiser - Turquoise 22",
		Description: `The Ocean Mist was inspired by arial photography of the Australian coastline. 
		The coastal hues of the teal green, contrasting with sand colored wheels, adds an uplifting freshness to the range that is a key for the spring/summer season.`,
		ImageURL:  "https://skatehut.images.blucommerce.com/skatehut/product/Skateboard%20Complete/penny-ocean-mist-complete-cruiser-turquoise-22-00.jpg?auto=format%2Ccompress&bluhash=6551975c6d48a2dda93d7009d6666f8b&w=1500&h=1500&fit=fillmax&fill=solid&s=f6fb65d4a907e30f3b41cb41ad411052",
		Price:     99.95,
		CreatedOn: time.Now().UTC().String(),
		UpdatedOn: time.Now().UTC().String(),
	},
	&Product{
		ID:   4,
		Name: "D-Street Ocean Pintail Complete Longboard",
		Description: `Featuring a 7-Ply Hardrock Maple deck for a solid construction and high quality RKP trucks, 
		enjoy a smooth ride with the Ocean Pintail Complete Longboard from D-Street.`,
		ImageURL:  "https://skatehut.images.blucommerce.com/skatehut/product/Longboards/d-street-ocean-pintail-complete-longboard-35-red-00.jpg?auto=format%2Ccompress&bluhash=a83497f1cf85dd8bd57176d35cb6acea&w=1500&h=1500&fit=fillmax&fill=solid&s=9f4c2978139417cc08d5c7fec8a779c5",
		Price:     71.95,
		CreatedOn: time.Now().UTC().String(),
		UpdatedOn: time.Now().UTC().String(),
	},
	&Product{
		ID:   5,
		Name: "Flow Brooklyn XTS Electric Scooter",
		Description: `Rugged. Durable. Versatile. A quick-release lever allows the handlebar height to be adjusted with ease. This, combined with its key-lockable/removable battery makes this the ideal sharing electric scooter. The intelligent design of the neck, made from perforated aluminium alloy, saves weight while providing secure fixing points to make it easier to lock it up and prevent your friends stealing it for a ride!
 
		Ergonomic. Stable. Responsive. The Brooklyn’s wide handlebar setup provides added stability and control. Ergonomic grips add extra comfort which is well needed for those long rides you’ll be making when you just don’t want to stop! An intuitive, easy-to-use digital interface is controlled by a single button. Power on/off, switch between 3 riding modes (eco, standard and sport) and turn the integrated lights on/off – all with a click of a button.
		 
		Secure. Powerful. Safe. Brooklyn’s powerful 374Whr battery can be removed and replaced effortlessly. With the added benefit of a lock and key security, it can be supplemented with additional spare batteries. Keep one on charge so you’ll never be kept waiting for your next ride! An integrated intelligent battery management system provides peace of mind and protection against over heating, short circuit, over-current and over-charge.
		 
		Rear. Wheel. Drive. The Brooklyn’s 8.5” rear wheel motor delivers a unique and stable riding feel which has to be experienced. Combined with the comfort and control of air tyres and a front-mounted shock absorber, the Brooklyn is for those who appreciate the refined with a pinch of rugged grit!
		 
		Powerful. Bright. LEDs. Ride safely day and night with built-in front and rear LED lights which brighten under braking for increased visibility.
		 
		Stop. Quickly. Anywhere. Rear disc and fender brakes combine with the 8.5” air tyres to give the Brooklyn responsive and reliable braking.
		 
		Rain. Rain. No Pain. The Brooklyn XTS electric scooter boasts an impressive IP56 waterproof rating – making it, along with the Koenji, the highest waterproof rated scooter in its class and beyond… The Brooklyn is well protected and more than capable of handling the Great British weather – although, like most people, Brooklyn always prefer riding in the summer!`,
		ImageURL:  "https://skatehut.images.blucommerce.com/skatehut/product/flow-brooklyn-xts-electric-scooter.jpg?auto=format%2Ccompress&bluhash=0a2e6fd6b6e947cf3979933345eaffea&w=4000&h=4000&fit=max&s=9642dcc32d91b1fd00b4e14e8f5001fe",
		Price:     503.95,
		CreatedOn: time.Now().UTC().String(),
		UpdatedOn: time.Now().UTC().String(),
	},
}
