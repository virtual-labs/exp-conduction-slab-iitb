let maindiv = document.getElementById('pannelcreate');
function activity1() {
    let text = `
    <div class='divide'>
    <div style='margin-top: 2vw;'>
        <br>
        <h4 class="center-text fs-20px fw-600"></h4>

        <div class="fs-16px">
        <h5>Conduction Through Slab (Conductivity as a function of temperature)</h5>
        <p>Learning Objective: Find the temperature at given distance for alpha = ${alpha}</p>
        </div>

        <button class='btn btn-info std-btn' style='position: relative; left: 50vw;' onclick='start_act1();' id='temp-btn-1' >Next</button>
    </div>
    </div>
    `;
    maindiv.innerHTML = text;
    setTimeout(() => { MathJax.typeset(); }, 300);
}
//for starting first activity
function start_act1() {
    let temp_btn = document.getElementById('temp-btn-1');
    if (temp_btn) {
        temp_btn.remove();
    }
    let btn_text = get_collapse_btn_text("Caculate Q", "tb1-box");
    let text = `
    ${btn_text}
    <div class='collapse divide' style='style='margin-top: 2vw; 'width: 80%; margin: auto;' id='tb1-box'>

        <h5>A plane wall of thickness (b) ${thickness}cm, length ${len}m and height ${height}m. The temperature at the left and is maintained at ${left_temp}&deg; C and right end at ${right_temp}&deg; C. The conductivity is given by: </h5>

        <br>

        <p style='text-align: center;'> 
            <span style='display: inline-block;' >
                $$ K = K_0(1 + \\alpha T) $$
            </span>
        </p>

        <p style='text-align: center;'> 
            Where K<sub>0</sub> = ${k_0} and &alpha; = <span style='display: inline-block;' > $$ ${alpha} $$
            </span>
        </p>

        <h5>Find the temperature at x = ${x}cm from left end.</h5>

       
    <div style='text-align: center;'><button class='btn btn-info std-btn' onclick='display_fouriers_law();'  id='temp-btn-0' >Verify</button></div>

    

    </div>

    `;
    maindiv.innerHTML += text;
    hide_all_steps();
    setTimeout(() => { show_step('tb1-box'); }, 150);
    setTimeout(() => { MathJax.typeset(); }, 300);
    //internal_calculations();
}
function display_fouriers_law() {
    let temp_btn = document.getElementById('temp-btn-0');
    if (temp_btn) {
        temp_btn.remove();
    }
    let btn_text = get_collapse_btn_text("Fourier's Law", "tb1-st1");
    let text = `
    ${btn_text}
    <div class='collapse divide' style='style='margin-top: 2vw; 'width: 80%; margin: auto;' id='tb1-st1'>


        <p> 
                From Fourier's Law
        </p>

        <p style='text-align: center;'> 
                <span style='display: inline-block;' >
                    $$ \\frac{Q}{A} = -K \\frac{dT}{dx} $$
                </span>
        </p>

        <p style='text-align: center;'> 
                <span style='display: inline-block;' >
                    $$ \\frac{Q}{A} \\int_{x_1}^{x_2} = -K_0 \\int_{T1}^{T2} (1 + \\alpha T)dT $$
                </span> 
        </p>

        <div id='a1-ques'>
             
        </div>


    </div>

    `;
    maindiv.innerHTML += text;
    hide_all_steps();
    setTimeout(() => { show_step('tb1-st1'); }, 150);
    setTimeout(() => { MathJax.typeset(); }, 300);
    temp_btn.remove();
    let parent = document.getElementById('a1-ques');
    let options = [
        `
            <span style='display: inline-block; padding-left: 10px;' >
                        $$ Q = K_0 \\frac{A}{b} [1 + \\frac{\\alpha}{2} (T_1 + T_2)] (T_1 - T_2) $$
            </span>`,
        `<span style='display: inline-block; padding-left: 10px;' >
                    $$ Q = K_0 Ab [1 + \\frac{\\alpha}{2} (T_1 + T_2)] (T_1 - T_2) $$
            </span>`,
        `<span style='display: inline-block; padding-left: 10px;' >
                    $$ Q = K_0 \\frac{A}{b} [1 + \\frac{\\alpha}{2} (T_1 - T_2)] (T_1 + T_2) $$
            </span>`,
        `<span style='display: inline-block; padding-left: 10px;' >
                    $$ Q = K_0 \\frac{A}{b} [1 + \\frac{\\alpha}{2} (T_1 - T_2)] (T_1 - T_2) $$
            </span>`,
    ];
    let ques_obj = new Updated_Question('After Integrating the above equation what do we get ?', options, '1', parent, calculate_at_x);
    ques_obj.load_question();
}
function calculate_at_x() {
    let btn_text = get_collapse_btn_text("Calculate temperature at x", "tb1-st2");
    let text = `
    ${btn_text}
    <div class='collapse divide' style='style='margin-top: 2vw; 'width: 80%; margin: auto;' id='tb1-st2'>

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
            c = <span style='display: inline-block; width: 80px;'><input type='text' id='inp-c' class='form-control'  /></span>
            <span style='display: inline-block; width: 80px;' id='dsp-c'></span>
            </p>

            <p style='text-align: center; font-size: 22px;'>
            T_x = <span style='display: inline-block; width: 80px;'><input type='text' id='inp-tx' class='form-control'  /></span>
            <span style='display: inline-block; width: 80px;' id='dsp-tx'></span>
            </p>
        </div>

        <div style='text-align: center;'><button class='btn btn-info std-btn' onclick='verify0();'  id='temp-btn-0' >Verify</button></div>


    </div>

    `;
    maindiv.innerHTML += text;
    hide_all_steps();
    setTimeout(() => { show_step('tb1-st2'); }, 150);
    setTimeout(() => { MathJax.typeset(); }, 300);
    internal_calculations();
}
function internal_calculations() {
    c = (1 / (thickness / 100)) * (1 + (alpha / 2) * (left_temp + right_temp)) * (left_temp - right_temp);
    a = left_temp + (Math.pow(left_temp, 2)) * (alpha / 2);
    t_x = (-1 + Math.sqrt(1 - (4 * (alpha / 2) * (c * (x / 100) - a)))) / (2 * (alpha / 2));
    console.log(`c = ${c}, a = ${a}, tx = ${t_x}`);
}
function verify0() {
    let btn = document.getElementById('temp-btn-0');
    console.log(`c = ${c}, a = ${a}, tx = ${t_x}`);
    let inp1 = document.getElementById('inp-c');
    let sp1 = document.getElementById('dsp-c');
    let inp2 = document.getElementById('inp-tx');
    let sp2 = document.getElementById('dsp-tx');
    if (!verify_values(parseFloat(inp1.value), c)) {
        alert('c is incorrect, calculate again.');
        return;
    }
    if (!verify_values(parseFloat(inp2.value), t_x)) {
        alert('Tx is incorrect, calculate again.');
        return;
    }
    btn.remove();
    inp1.remove();
    sp1.innerText = `${(c).toFixed(4)}`;
    inp2.remove();
    sp2.innerText = `${(t_x).toFixed(4)}`;
    alert('Your entered values are correct!!');
    btn.style.display = 'none';
    activity2();
}
activity1();
//# sourceMappingURL=activity1.js.map