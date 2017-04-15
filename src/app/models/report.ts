export class Report {
    A: number;
    B: number;
    C: number;
    D: number;
    E: number;
    F: number;
    G: number;
    H: number;
    K: number;
    L: number;
    P: number;
    S: number;
    V: number;
    X: number;
    Z: number;

    public constructor(){
        this.A = 0;
        this.B = 0;
        this.C = 0;
        this.D = 0;
        this.E = 0;
        this.F = 0;
        this.G = 0;
        this.H = 0;
        this.K = 0;
        this.L = 0;
        this.P = 0;
        this.S = 0;
        this.V = 0;
        this.X = 0;
        this.Z = 0;
    }

    public ToFormatedString(): string{
        return "A: " + this.A + "%0D%0A" +
            "B: " + this.B + "%0D%0A" + 
            "C: " + this.C + "%0D%0A" + 
            "D: " + this.D + "%0D%0A" + 
            "E: " + this.E + "%0D%0A" + 
            "F: " + this.F + "%0D%0A" + 
            "G: " + this.G + "%0D%0A" + 
            "H: " + this.H + "%0D%0A" + 
            "K: " + this.K + "%0D%0A" + 
            "L: " + this.L + "%0D%0A" + 
            "P: " + this.P + "%0D%0A" + 
            "S: " + this.S + "%0D%0A" + 
            "V: " + this.V + "%0D%0A" + 
            "X: " + this.X + "%0D%0A" + 
            "Z: " + this.Z + "%0D%0A" + 
            "Total: " + this.Total() + "%0D%0A";
    }

    public Total(): number{
        return this.A + this.B + this.C + this.D +
            this.E + this.F + this.G + this.H + 
            this.K + this.L + this.P + this.S + 
            this.V + this.X + this.Z;
    }
}