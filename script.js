

class BackCard {
    constructor(code,path){
        this.path = path;
        this.code = code;
        this.mapd = {
            shrimp : "M14,4c0-.552,.448-1,1-1s1,.448,1,1-.448,1-1,1-1-.448-1-1Zm10,17.5c0,1.425-1.075,2.5-2.5,2.5H12c-3.247,0-6.288-1.276-8.563-3.594C1.327,18.258,.126,15.466,.01,12.48c-.01-.053-.011-.522-.008-.704C.121,5.282,5.675,0,12.382,0h1.687c.02,0,9.433,.024,9.433,.024,.276,0,.5,.225,.499,.501,0,.275-.225,.499-.5,.499h0l-1.515-.003c-.241,4.074-3.314,6.979-7.484,6.979h-.604c-1.999,0-3.902,.841-5.34,2.168,.178,.55,.82,1.832,2.944,1.832,.276,0,.5,.224,.5,.5s-.224,.5-.5,.5c-2.112,0-3.217-1.072-3.702-2.036-.74,.886-1.291,1.92-1.578,3.028,.086,.266,.741,2.008,3.28,2.008,.276,0,.5,.224,.5,.5s-.224,.5-.5,.5c-1.714,0-2.834-.689-3.501-1.443-.046,1.894,.675,3.703,2.032,5.101,1.444,1.488,3.462,2.342,5.537,2.342h.356c.972-.722,5.504-4,7.575-4,1.425,0,2.5,1.075,2.5,2.5ZM11,4c0,1.738,1.29,3,3.068,3h.432c3.591,0,6.243-2.485,6.482-5.981l-7.064-.015c-1.7,.069-2.919,1.308-2.919,2.997Zm-7.416,1.049l.003,.023c.204,2.544,1.937,4.339,4.241,4.424,1.093-1.026,2.429-1.8,3.88-2.198-1.047-.709-1.707-1.898-1.707-3.299,0-1.189,.476-2.226,1.261-2.946-3.072,.296-5.805,1.793-7.677,3.995ZM1.004,12.296c.163,.352,.916,1.689,3,1.704,.356-.003,.778-.041,1.216-.125,.309-1.267,.924-2.452,1.757-3.468-2.109-.392-3.71-1.994-4.23-4.238-1.071,1.639-1.707,3.565-1.745,5.625-.003,.168-.002,.336,.002,.503Zm7.663,10.193c-.486-.329-.94-.709-1.354-1.135-1.557-1.604-2.379-3.688-2.313-5.869,.006-.189,.019-.377,.038-.563-.345,.051-.678,.078-.997,.078-1.287-.009-2.231-.424-2.843-.909,.403,2.107,1.414,4.049,2.953,5.615,1.28,1.304,2.826,2.249,4.517,2.783Zm14.333-.989c0-.883-.617-1.5-1.5-1.5-1.236,0-4.017,1.729-5.854,3h5.854c.883,0,1.5-.617,1.5-1.5Z",
            salad : "m4.018,5.933h0s-.005-.005,0,0Zm19.947,7.988c-.743,4.371-3.604,8.026-7.85,10.031l-.102.048-8.129-.048C3.64,21.948.778,18.292.035,13.922c-.123-.727.08-1.466.557-2.031.391-.463.928-.764,1.515-.859-.071-.337-.107-.683-.107-1.032,0-1.655.775-3.156,2.018-4.067.003.003.005.005,0,0-1.354-1.355-1.354-3.56,0-4.915C4.694.341,5.582.001,6.471.001,8.115.001,8.978,1.064,9,1.087c.022-.023.865-1.086,2.519-1.086.891,0,1.783.338,2.463,1.017.785.785,1.141,1.869.997,2.914.886-.566,2.021-1.722,2.021-3.932h1c0,1.642-.539,2.811-1.211,3.63,2.29-.512,4.529-.622,4.689-.629l.549-.025-.027.548c-.008.185-.22,4.234-1.677,7.476h1.169c.74,0,1.438.325,1.917.891.477.564.68,1.304.557,2.03ZM13.847,5.72c-.25.207-.506.4-.712.548-1.061,1.079-1.413,2.635-.918,4.069.078.168.257.484.413.663h.664l3.354-3.354.707.707-2.646,2.646h4.509c1.222-2.454,1.624-5.679,1.742-6.963-1.42.111-5.156.507-7.111,1.683Zm-9.122-.494c.072.071.152.14.242.207.622-.278,1.31-.433,2.033-.433,1.808,0,3.395.965,4.274,2.407.241-.691.637-1.33,1.178-1.871.215-.215.473-.413.761-.594.333-.278.588-.524.642-.631.341-.874.114-1.892-.58-2.586-.965-.965-2.536-.965-3.501,0-.337.337-.774,1.134-.774,1.134,0,0-.465-.825-.774-1.134-.966-.966-2.537-.965-3.501,0-.965.965-.965,2.536,0,3.5Zm-1.725,4.774c0,.34.042.677.126,1h7.748c.084-.323.126-.66.126-1,0-2.206-1.794-4-4-4s-4,1.794-4,4Zm19.645,2.537c-.288-.341-.709-.537-1.153-.537H2.509c-.444,0-.865.195-1.153.537-.286.339-.408.783-.334,1.218.682,4.009,3.3,7.373,7.19,9.246h7.576c3.891-1.873,6.509-5.237,7.19-9.246.074-.435-.048-.878-.334-1.217Z",
            wine : "m17.993,0c-2.542,0-4.795,1.632-5.638,4H2.362c-.976,0-1.839.596-2.199,1.517-.347.886-.137,1.829.587,2.498l7.022,6.037c.501.456,1.104.725,1.728.821v8.127h-4c-.276,0-.5.224-.5.5s.224.5.5.5h9c.276,0,.5-.224.5-.5s-.224-.5-.5-.5h-4v-8.126c.621-.095,1.221-.361,1.718-.813l3.122-2.685c.828.41,1.718.623,2.65.625h.003s.004,0,.007,0h.003c3.304-.005,5.99-2.695,5.99-6S21.302,0,17.993,0Zm-6.438,13.312c-.409.371-.786.565-1.556.565s-1.152-.198-1.565-.574L1.39,7.245c-.381-.352-.491-.862-.295-1.363.159-.407.586-.882,1.268-.882h15.275c.682,0,1.108.475,1.268.882.196.501.086,1.011-.308,1.375l-7.042,6.055Zm6.441-2.312c-.632,0-1.241-.12-1.818-.346l3.111-2.675c.684-.633.894-1.576.547-2.462-.36-.921-1.224-1.517-2.199-1.517h-4.217c.786-1.793,2.575-3,4.573-3,2.757,0,5,2.243,5,5s-2.241,4.998-4.996,5Z",
            fish : "m5,19c0,.552-.448,1-1,1s-1-.448-1-1,.448-1,1-1,1,.448,1,1ZM24,6.5c0,.911-.549,1.5-1.398,1.5h-5.604c-.015,1.858-.112,3.519-.309,5h3.311v.5c0,.991-.085,1.868-.276,2.846-.188.958-1.042,1.654-2.031,1.654h-2.365c-2.146,4.475-6.613,6-14.827,6h-.5v-.5c0-4.986.562-8.591,2.004-11.135v-4c0-.969.538-1.852,1.403-2.304,1.821-.951,5.033-2.062,8.092-2.062h.5v3.196c1.218-.12,2.549-.182,4-.193V1.398c0-.849.589-1.398,1.5-1.398,1.315,0,3.218.966,3.472,3.028,2.062.254,3.028,2.157,3.028,3.472ZM3.004,10.933c1.723-2.013,4.298-3.129,7.996-3.622v-2.301c-3.589.142-6.765,1.747-7.129,1.938-.534.279-.866.822-.866,1.417v2.567Zm6.351,11.02c-.793-3.623-3.693-6.514-7.309-7.305-.718,2.121-1.018,4.856-1.044,8.35,3.496-.026,6.232-.326,8.353-1.045Zm6.643-13.951c-7.697.056-11.712,1.444-13.588,5.704,3.872.908,6.976,4.003,7.887,7.882,4.258-1.876,5.644-5.892,5.7-13.586Zm.538,5.998c-.194,1.108-.453,2.105-.786,3h1.942c.512,0,.954-.356,1.05-.847.146-.744.225-1.426.25-2.153h-2.456Zm6.464-7.5c0-.783-.629-2.5-2.5-2.5h-.5v-.5c0-1.871-1.717-2.5-2.5-2.5-.5,0-.5.249-.5.398v5.602h5.602c.149,0,.398,0,.398-.5Z",
            croissant : "m22.575,3.887c-1.573-.899-2.971-1.393-4.596-1.618-.079-.628-.387-1.208-.871-1.627-.579-.5-1.35-.726-2.115-.613-1.867.272-3.752.821-5.195,1.51-.264-.203-.566-.356-.893-.446-.713-.197-1.477-.078-2.098.323-2.023,1.302-4.089,3.367-5.391,5.391-.4.622-.518,1.387-.323,2.098.09.327.242.629.447.893C.85,11.241.301,13.127.028,14.994c-.111.765.112,1.535.613,2.115.419.484,1,.792,1.627.871.225,1.625.719,3.023,1.618,4.596.516.902,1.425,1.424,2.417,1.424.193,0,.39-.02.587-.061,1.25-.258,2.152-1.252,2.296-2.533.17-1.621.67-2.928.901-3.406h1.272s.64-2.001,1.433-3.178l2.033-2.033c.512-.372,2.02-1.109,3.174-1.43v-1.272c.478-.231,1.786-.731,3.406-.901,1.28-.145,2.274-1.046,2.533-2.296.25-1.208-.286-2.388-1.364-3.004Zm-14.382,17.408c-.115,1.024-.882,1.537-1.504,1.666-.617.131-1.45-.037-1.934-.88-.801-1.403-1.255-2.652-1.472-4.079h5.709c-.277.666-.652,1.892-.798,3.294Zm2.454-4.294H2.593c-.466,0-.89-.194-1.195-.546-.311-.36-.45-.839-.38-1.316.243-1.665.715-3.339,1.308-4.66.041.023,9.356,4.241,9.356,4.241-.368.656-.78,1.597-1.035,2.281Zm1.653-3.099L2.881,9.643c-.41-.205-.703-.561-.824-1.003-.12-.438-.047-.909.199-1.292,1.229-1.911,3.18-3.861,5.091-5.091.383-.247.856-.32,1.292-.199.442.121.798.414.995.806l4.268,9.437-1.602,1.602Zm4.7-3.255c-.684.255-1.624.667-2.28,1.034,0,0-4.22-9.32-4.24-9.356,1.321-.593,2.994-1.065,4.658-1.308.476-.069.956.069,1.316.38.353.305.546.729.546,1.195v8.054Zm5.959-3.958c-.128.622-.642,1.389-1.666,1.504-1.402.147-2.628.521-3.294.798V3.282c1.427.218,2.676.671,4.079,1.472.844.482,1.008,1.315.88,1.934Z",
            beer: "m5.546,2.001s0,0,0,0c-.008,0-.004,0,0,0Zm17.454,10.499v6.5h-4v2.5c0,1.379-1.122,2.5-2.5,2.5H3.5c-1.378,0-2.5-1.121-2.5-2.5V6h1v-.5c0-1.93,1.436-3.499,3.545-3.499.007,0,.004,0,0,0,.711-1.226,2.03-2.001,3.454-2.001,1.551,0,2.932.892,3.589,2.27.457-.179.93-.27,1.411-.27,2.206,0,4,1.794,4,4h1v4h1.5c1.378,0,2.5,1.121,2.5,2.5ZM3,6h4v7.5c0,.827.673,1.5,1.5,1.5s1.5-.673,1.5-1.5v-7.5h7c0-1.654-1.346-3-3-3-.491,0-.975.13-1.438.385l-.534.295-.184-.581c-.398-1.255-1.541-2.099-2.844-2.099-1.158,0-2.223.685-2.715,1.744l-.151.324s-.579-.068-.634-.068c-1.378,0-2.5,1.121-2.5,2.5v.5Zm15,1h-7v6.5c0,1.379-1.122,2.5-2.5,2.5s-2.5-1.121-2.5-2.5v-6.5H2v14.5c0,.827.673,1.5,1.5,1.5h13c.827,0,1.5-.673,1.5-1.5V7Zm4,5.5c0-.827-.673-1.5-1.5-1.5h-1.5v7h3v-5.5Z"
        };
        this.arrcode = [
            "shrimp",
            "salad",
            "wine",
            "fish",
            "croissant",
            "beer",
        ];
    }
    setd(){
        this.path.setAttribute("d", this.mapd[this.arrcode[this.code]]);
    }
}

var active = false;
var activeCard = -1;
var backCards = [];
var remainingCards = [0,1,2,3,4,5,6];



//Timer

var secs = 0;
var minute = 0;
var time = "";
var score = 0;
var pause = false;

var timer;

function startInterval() {
    timer = setInterval(() => {
        if(secs == 60){
            secs = 0;
            minute += 1;
        }
        else{
            secs++;
            score++;
        }
        time = `${minute < 10 ? "0" + minute : minute}:${secs < 10 ? "0" + secs : secs}`;
    
        document.getElementById('timer').textContent = time;
    }, 1000); 
}

function pauseInterval() {
    clearInterval(timer);
}

function resumeInterval() {
    startInterval();
}


startInterval();

document.addEventListener('DOMContentLoaded', function() {
    var parentElement = document.getElementById('main-grid');
    document.getElementById('best-time').textContent = localStorage.getItem('bestTime') === null ? "00:00" : localStorage.getItem('bestTime');
    
    //dark mode switch
    let darkModeToggle = document.getElementById('toggleSwitch');

    //Dark mode local preference
    if(localStorage.getItem('darkmode') == 'true'){
        darkModeToggle.checked = true;
        document.documentElement.classList.toggle('dark-mode');
    }
    darkModeToggle.addEventListener('change', function() {
        if (this.checked) {
            document.documentElement.classList.toggle('dark-mode');
            localStorage.setItem('darkmode', true);
        } else {
            document.documentElement.classList.remove('dark-mode');
            localStorage.setItem('darkmode', false);
        }
      });
    
    document.getElementById('retry').addEventListener('click', function() {
        window.location.reload();
      });

      document.getElementById('pause').addEventListener('click', function() {
        if(!pause){
            pauseInterval();
            overlay.style.display = 'block';
            document.querySelector('#pause #path1').setAttribute('d', 'M20.494,7.968l-9.54-7A5,5,0,0,0,3,5V19a5,5,0,0,0,7.957,4.031l9.54-7a5,5,0,0,0,0-8.064Zm-1.184,6.45-9.54,7A3,3,0,0,1,5,19V5A2.948,2.948,0,0,1,6.641,2.328,3.018,3.018,0,0,1,8.006,2a2.97,2.97,0,0,1,1.764.589l9.54,7a3,3,0,0,1,0,4.836Z');
            document.querySelector('#pause #path2').setAttribute('d','');
        
        }
        else{
            startInterval();
            overlay.style.display = 'none';
            document.querySelector('#pause #path1').setAttribute('d', 'M6.5,0A3.5,3.5,0,0,0,3,3.5v17a3.5,3.5,0,0,0,7,0V3.5A3.5,3.5,0,0,0,6.5,0ZM8,20.5a1.5,1.5,0,0,1-3,0V3.5a1.5,1.5,0,0,1,3,0Z"/><path d="M17.5,0A3.5,3.5,0,0,0,14,3.5v17a3.5,3.5,0,0,0,7,0V3.5A3.5,3.5,0,0,0,17.5,0ZM19,20.5a1.5,1.5,0,0,1-3,0V3.5a1.5,1.5,0,0,1,3,0Z');
            document.querySelector('#pause #path2').setAttribute('d','M17.5,0A3.5,3.5,0,0,0,14,3.5v17a3.5,3.5,0,0,0,7,0V3.5A3.5,3.5,0,0,0,17.5,0ZM19,20.5a1.5,1.5,0,0,1-3,0V3.5a1.5,1.5,0,0,1,3,0Z');
        }
        pause = !pause;
    });

  
    //Generate series of cards
    for (var i = 0; i < 12; i++) {
        // Create flip-container div
        var flipContainer = document.createElement('div');
        flipContainer.className = 'flip-container';
        flipContainer.id = 'flipContainer' + i;

        // Create square div
        var square = document.createElement('div');
        square.className = 'square';

        // Create front-face div
        var frontFace = document.createElement('div');
        frontFace.className = 'front-face';

        // Create back-face div
        var backFace = document.createElement('div');
        backFace.className = 'back-face';


        // Create SVG element
        var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
        svg.setAttribute('viewBox', '0 0 24 24');
        svg.setAttribute('width', '512');
        svg.setAttribute('height', '512');
        svg.classList = 'svg-front';

        // Create path element (empty for now)
        var path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path.setAttribute('d', 'M1.333,7.238C.484,5.522-1.2,1.269,1.2.15A1.949,1.949,0,0,1,3.329.573l4.96,5.3A1,1,0,1,1,6.887,7.3L2,2.08c.119,3.777,2.343,6.6,4.841,9.439a1,1,0,0,1-1.39,1.446A24.522,24.522,0,0,1,1.333,7.238ZM18.005,16.2a1.259,1.259,0,0,0-1.09-.4,8.055,8.055,0,0,1-3.458-.29.985.985,0,0,0-.981.254c-1.494,2.256,3.274,2.113,4.312,2.08l5.483,5.839a1,1,0,0,0,1.458-1.371ZM15,14a4.99,4.99,0,0,0,3.536-1.462l5.171-5.172A1,1,0,1,0,22.293,5.95l-5.171,5.172a3,3,0,0,1-3.406.576l6.991-6.991a1,1,0,1,0-1.414-1.414L12.3,10.284a3,3,0,0,1,.576-3.406L18.05,1.707A1,1,0,0,0,16.636.293L11.464,5.464a5.01,5.01,0,0,0-.635,6.293L.293,22.293a1,1,0,0,0,1.414,1.414L12.243,13.171A5,5,0,0,0,15,14Z');
        svg.appendChild(path);
        frontFace.appendChild(svg);

        // Create SVG element
        var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
        svg.setAttribute('viewBox', '0 0 24 24');
        svg.setAttribute('width', '512');
        svg.setAttribute('height', '512');
        svg.id = 'svg-back' + i;

        // Create path element (empty for now)
        var path = document.createElementNS('http://www.w3.org/2000/svg', 'path');

        // Append path to SVG
        svg.appendChild(path);

        // Append SVG to back-face
        backFace.appendChild(svg);

        // Append front-face and back-face to square
        square.appendChild(frontFace);
        square.appendChild(backFace);

        // Append square to flip-container
        flipContainer.appendChild(square);

        // Append flip-container to the parent element
        parentElement.appendChild(flipContainer);
    }
    
    //Make sure that the keys only proc twice
    var arrKeys = [0,0,1,1,2,2,3,3,4,4,5,5];

    //Shuffle for difficulty
    shuffleArray(arrKeys);


    for (var x = 0; x < 12; x++){
        document.getElementById(`flipContainer${x}`).addEventListener('click', handleClick);
        backCards.push(new BackCard(arrKeys[x], document.querySelector(`#svg-back${x} path`)));
        backCards[x].setd();
    }

    function handleClick(event) {
        let position = parseInt(this.id.replace('flipContainer', ''));
        this.classList.toggle('clicked');
        if (activeCard > -1) {

            //Checks if the two face cards are the same
            if (backCards[position].code == backCards[activeCard].code && position != activeCard) {

                // Removing the listener after each card matches
                this.removeEventListener('click', handleClick);
                document.getElementById(`flipContainer${activeCard}`).removeEventListener('click', handleClick);
                
                //Monitor the number of remaining cards
                remainingCards = remainingCards.filter((item) => item !== backCards[position].code);
                activeCard = -1;


                //Gameover
                if(remainingCards.length === 1){
                    clearInterval(timer);
                    localStorage.setItem('bestTime', time);
                    let lastScore = localStorage.getItem('score');
                    if(lastScore != null && lastScore < score){
                        document.getElementById('best-time').textContent = time;
                        localStorage.setItem('score', score);
                    }
                    else{
                        localStorage.setItem('score', score);
                    }

                    let audio = new Audio('assets/win.mp3');
                    audio.play();

                    startConfetti();

                    //  Stop confetti after a 5secs
                    setTimeout(function() {
                        stopConfetti();
                    }, 5000);
                }

            } else {
                // When the user faces 2 cards, it will automatically face down
                overlay.style.display = 'block';
                setTimeout(() => {
                    this.classList.remove('clicked');
                    document.getElementById(`flipContainer${activeCard}`).classList.remove('clicked');
                    activeCard = -1;
                    overlay.style.display = 'none';
                }, 500); 
            }
        } else {
            activeCard = position;
        }
    }

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            // Generate a random index lower than the current element
            let j = Math.floor(Math.random() * (i + 1));
    
            // Swap elements at indices i and j
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }
    
});






