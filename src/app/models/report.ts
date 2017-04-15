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
    W: number;
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
        this.W = 0;
        this.X = 0;
        this.Z = 0;
    }

    public ToFormatedString(): string{
        return this.ElementToString('A', this.A) +
            this.ElementToString('B', this.B) + 
            this.ElementToString('C', this.C) + 
            this.ElementToString('D', this.D) + 
            this.ElementToString('E', this.E) + 
            this.ElementToString('F', this.F) + 
            this.ElementToString('G', this.G) +
            this.ElementToString('H', this.H) + 
            this.ElementToString('K', this.K) + 
            this.ElementToString('L', this.L) + 
            this.ElementToString('P', this.P) + 
            this.ElementToString('S', this.S) + 
            this.ElementToString('V', this.V) + 
            this.ElementToString('W', this.W) +
            this.ElementToString('X', this.X) + 
            this.ElementToString('Z', this.Z) + 
            "Total: " + this.Total() + "%0D%0A";
    }

    public Total(): number{
        return this.A + this.B + this.C + this.D +
            this.E + this.F + this.G + this.H + 
            this.K + this.L + this.P + this.S + 
            this.V + this.W + this.X + this.Z;
    }

    private ElementToString(letter: string, ele: number): string{
        if(ele > 0){
            return letter + ": " + ele + "%0D%0A"
        }else{
            return "";
        }
    }
}