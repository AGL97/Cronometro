export class Timer
{
    constructor()
    {
        this._ms = 0;
        this._ss = 0;
        this._mm = 0;
        this._hh = 0;
        this._cronoMs = 0;
        this._cronoSs = 0;
        this._cronoHh = 0;
        this._cronoMm = 0;
    }
    
    get getMiliseconds() {
        return this._ms;        
    }

    get getSeconds() {
        return this._ss;        
    }

    get getMinutes() {   
        return this._mm;        
    }
    get getHours() {
        return this._hh;        
    }

    set setMiliseconds(value)
    {
        this._ms = value;
    }

    set setSeconds(value)
    {
        this. _ss = value;
    }

    set setMinutes(value)
    {
        this._mm = value;
    }

    set setHours(value)
    {
        this._hh = value;
    }


    updateMs() {
    this._cronoMs  = setInterval( () => 
    {
    this._ms++;
    if(this._ms===1000)
        {
            this._ms=0;
        }
    },1)
    }

    updateSs() {
        this._cronoSs  = setInterval( () => 
        {
        this._ss++;
        if(this._ss===60)
            {
                this._ss=0;
            }
        },1000)
        }

    updateMm() {
        this._cronoMm  = setInterval( () => 
        {
        this._mm++;
        if(this._mm===60)
                {
                    this._mm=0;
                }
            },60000)
        }

    updateHh() {
        this._cronoHh  = setInterval( () => 
        {
        this._hh++;
        if(this._cronoHh===60)
            {
                this._hh=0;
            }
        },3600000)
        }

    start()
    {
        this.updateMs();
        this.updateSs();
        this.updateMm();
        this.updateHh();
    }

    stop()
    {
        clearInterval(this._cronoMs);
        clearInterval(this._cronoSs);
        clearInterval(this._cronoMm);
        clearInterval(this._cronoHh);
    } 

    reset()
    {
        this.setMiliseconds = 0;
        this.setSeconds = 0;
        this.setMinutes = 0;
        this.setHours = 0;
    }
    
    now()
    {
        return `${this.getHours}:${this.getMinutes}:${this.getSeconds}:${this.getMiliseconds}`;
    }
}
