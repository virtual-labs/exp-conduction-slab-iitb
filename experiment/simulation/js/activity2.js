function activity2() {
    let text = `
    <div class='divide'>
    <div style='margin-top: 2vw;'>
        <br>
        <h4 class="center-text fs-20px fw-600"></h4>

        <div class="fs-16px">
        <p>Learning Objective: Find the temperature at given distance for alpha = ${alpha2}</p>
        </div>

        <button class='btn btn-info std-btn' style='position: relative; left: 50vw;' onclick='start_act2();' id='temp-btn-21' >Next</button>
    </div>
    </div>
    `;
    maindiv.innerHTML += text;
    setTimeout(() => { MathJax.typeset(); }, 300);
}
//for starting first activity
function start_act2() {
    let temp_btn = document.getElementById('temp-btn-21');
    if (temp_btn) {
        temp_btn.remove();
    }
    let btn_text = get_collapse_btn_text("Caculate Q", "tb2-box");
    let text = `
    ${btn_text}
    <div class='collapse divide' style='style='margin-top: 2vw; 'width: 80%; margin: auto;' id='tb2-box'>

        <h5>A plane wall of thickness (b) ${thickness}cm, length ${len}m and height ${height}m. The temperature at the left and is maintained at ${left_temp}&deg; C and right end at ${right_temp}&deg; C. The conductivity is given by: </h5>

        <br>

        <p style='text-align: center;'> 
            <span style='display: inline-block;' >
                $$ K = K_0(1 + \\alpha T) $$
            </span>
        </p>

        <p style='text-align: center;'> 
            Where K<sub>0</sub> = ${k_0} and &alpha; = <span style='display: inline-block;' > $$ ${alpha2} $$
            </span>
        </p>

        <h5>Find the temperature at x = ${x}cm from left end.</h5>

       
    <div style='text-align: center;'><button class='btn btn-info std-btn' onclick='calculate_at_x2();'  id='temp-btn-20' >Verify</button></div>

    

    </div>

    `;
    maindiv.innerHTML += text;
    hide_all_steps();
    setTimeout(() => { show_step('tb2-box'); }, 150);
    setTimeout(() => { MathJax.typeset(); }, 300);
    //internal_calculations();
}
// function display_fouriers_law2() {
//     let temp_btn: HTMLButtonElement = <HTMLButtonElement> document.getElementById('temp-btn-20');
//     if(temp_btn) {
//         temp_btn.remove();
//     }
//     let btn_text = get_collapse_btn_text("Fourier's Law", "tb1-st2");
//     let text = `
//     ${btn_text}
//     <div class='collapse divide' style='style='margin-top: 2vw; 'width: 80%; margin: auto;' id='tb1-st2'>
//         <p> 
//                 From Fourier's Law
//         </p>
//         <p style='text-align: center;'> 
//                 <span style='display: inline-block;' >
//                     $$ \\frac{Q}{A} = -K \\frac{dT}{dx} $$
//                 </span>
//         </p>
//         <p style='text-align: center;'> 
//                 <span style='display: inline-block;' >
//                     $$ \\frac{Q}{A} \\int_{x_1}^{x_2} = -K_0 \\int_{T1}^{T2} (1 + \\alpha T)dT $$
//                 </span> 
//         </p>
//         <div id='a2-ques'>
//         </div>
//     </div>
//     `;
//     maindiv.innerHTML += text;
//     hide_all_steps();
//     setTimeout(() => {show_step('tb1-st2');}, 150);
//     setTimeout(() => {MathJax.typeset();}, 300);
//     temp_btn.remove();
//     let parent: HTMLDivElement = <HTMLDivElement> document.getElementById('a1-ques');
//     let options: string[] = [
//         `
//             <span style='display: inline-block; padding-left: 10px;' >
//                         $$ Q = K_0 \\frac{A}{b} [1 + \\frac{\\alpha}{2} (T_1 + T_2)] (T_1 - T_2) $$
//             </span>`,
//             `<span style='display: inline-block; padding-left: 10px;' >
//                     $$ Q = K_0 Ab [1 + \\frac{\\alpha}{2} (T_1 + T_2)] (T_1 - T_2) $$
//             </span>`,
//             `<span style='display: inline-block; padding-left: 10px;' >
//                     $$ Q = K_0 \\frac{A}{b} [1 + \\frac{\\alpha}{2} (T_1 - T_2)] (T_1 + T_2) $$
//             </span>`,
//             `<span style='display: inline-block; padding-left: 10px;' >
//                     $$ Q = K_0 \\frac{A}{b} [1 + \\frac{\\alpha}{2} (T_1 - T_2)] (T_1 - T_2) $$
//             </span>`,
//     ];
//     let ques_obj = new Updated_Question(
//         'After Integrating the above equation what do we get ?',
//         options,
//         '1',
//         parent,
//         calculate_at_x
//     );
//     ques_obj.load_question();
// }
function calculate_at_x2() {
    let btn_text = get_collapse_btn_text("Calculate temperature at x", "tb2-st2");
    let text = `
    ${btn_text}
    <div class='collapse divide' style='style='margin-top: 2vw; 'width: 80%; margin: auto;' id='tb2-st2'>

        <p> 
            Now to get temperature at x = ${x}cm = ${(x / 100).toFixed(2)}m and b = ${thickness}cm = ${(thickness / 10).toFixed(1)}m          
        </p>

        <p style='text-align: center; font-size: 22px;'> 
                <span style='display: inline-block;' >
                    $$ \\frac{1}{x} \\left[1 + \\frac{\\alpha}{2}(T_1 + T_x) \\right] (T_1 - T_x)  = \\frac{1}{b} \\left[1 + \\frac{\\alpha}{2}(T_1 + T_2) \\right] (T_1 - T_2) $$
                </span>
        </p>

        <p> 
            let's take R.H.S as a constant value c        
        </p>

        <p style='text-align: center; font-size: 22px;'> 
                <span style='display: inline-block;' >
                    $$ \\frac{1}{b} \\left[1 + \\frac{\\alpha}{2}(T_1 + T_2) \\right] (T_1 - T_2) = c $$
                </span>
        </p>

        <p> 
            Now equation can be shown as:        
        </p>

        <p style='text-align: center; font-size: 22px;'> 
                <span style='display: inline-block;' >
                    $$ \\left[ T_1 + \\frac{\\alpha}{2}(T_1^{2} + T_1 T_x) \\right] - \\left[ T_x + \\frac{\\alpha}{2}(T_x^{2} + T_1 T_x) \\right] = cx $$
                </span> 
        </p>

        <p style='text-align: center; font-size: 22px;'> 
                <span style='display: inline-block;' >
                    $$ T_1 + \\frac{\\alpha}{2} T_1^2 = a $$
                </span>
        </p>

        <p style='text-align: center; font-size: 22px;'> 
                <span style='display: inline-block;' >
                    $$ \\frac{\\alpha}{2} T_x^2 + T_x + (cx - a) = 0 $$
                </span> 
        </p>

        <p> 
            we will only consider positive root for this equation         
        </p>

        <p style='text-align: center; font-size: 22px;'> 
                <span style='display: inline-block;' >
                    $$ T_x = \\frac{-1 + \\sqrt{1^2 - 4 \\times \\frac{\\alpha}{2} \\times (cx - a)}}{2 \\times \\frac{\\alpha}{2}} $$
                </span> 
        </p>

        <div>
            Calculate: 

            <p style='text-align: center; font-size: 22px;'>
            c = <span style='display: inline-block; width: 80px;'><input type='text' id='inp-c2' class='form-control'  /></span>
            <span style='display: inline-block; width: 80px;' id='dsp-c2'></span>
            </p>

            <p style='text-align: center; font-size: 22px;'>
            T_x = <span style='display: inline-block; width: 80px;'><input type='text' id='inp-tx2' class='form-control'  /></span>
            <span style='display: inline-block; width: 80px;' id='dsp-tx2'></span>
            </p>
        </div>

        <div style='text-align: center;'><button class='btn btn-info std-btn' onclick='verify02();'  id='temp-btn-0' >Verify</button></div>


    </div>

    `;
    maindiv.innerHTML += text;
    hide_all_steps();
    setTimeout(() => { show_step('tb2-st2'); }, 150);
    setTimeout(() => { MathJax.typeset(); }, 300);
    internal_calculations2();
}
function internal_calculations2() {
    c2 = (1 / (thickness / 100)) * (1 + (alpha2 / 2) * (left_temp + right_temp)) * (left_temp - right_temp);
    a2 = left_temp + (Math.pow(left_temp, 2)) * (alpha2 / 2);
    t_x2 = a2 - c2 * (x / 100);
    console.log(`c = ${c2}, a = ${a2}, tx = ${t_x2}`);
}
function verify02() {
    let btn = document.getElementById('temp-btn-0');
    console.log(`c = ${c2}, a = ${a2}, tx = ${t_x2}`);
    let inp1 = document.getElementById('inp-c2');
    let sp1 = document.getElementById('dsp-c2');
    let inp2 = document.getElementById('inp-tx2');
    let sp2 = document.getElementById('dsp-tx2');
    if (!verify_values(parseFloat(inp1.value), c2)) {
        alert('c is incorrect, calculate again.');
        return;
    }
    if (!verify_values(parseFloat(inp2.value), t_x2)) {
        alert('Tx is incorrect, calculate again.');
        return;
    }
    btn.remove();
    inp1.remove();
    sp1.innerText = `${(c2).toFixed(4)}`;
    inp2.remove();
    sp2.innerText = `${(t_x2).toFixed(4)}`;
    alert('Your entered values are correct!!');
    btn.style.display = 'none';
    activity3();
}
//# sourceMappingURL=activity2.js.map