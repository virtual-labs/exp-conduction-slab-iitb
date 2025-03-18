// current experiment variables
let thickness = 10; //in cm
let len = 5; //in m
let height = 4; //in m
let left_temp = parseInt((90 + Math.random() * 10).toFixed(0)); // in degreee celcius
let right_temp = parseInt((30 + Math.random() * 5).toFixed(0)); // in degreee celcius
let k_0 = parseInt((50 + Math.random() * 15).toFixed(0));
//alpha values for all activities
let alpha = 0.5;
let alpha2 = 0;
let alpha3 = -0.01;
let x = 5; // in cm
//for activity 1 calculation
let c = 0;
let t_x = 0;
let a = 0;
//for activity 2 calculation
let c2 = 0;
let t_x2 = 0;
let a2 = 0;
//for activity 3 calculation
let c3 = 0;
let t_x3 = 0;
let a3 = 0;
//data table for chart
let tab4_y = [0, 5, 10];
let tab4_x = [
    [
        100,
        73.59100475585703,
        30
    ],
    [
        100,
        65,
        30
    ],
    [
        100,
        50.50252531694167,
        30.000000000000004
    ]
];
//# sourceMappingURL=data.js.map