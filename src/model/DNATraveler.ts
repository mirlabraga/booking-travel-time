class DNATraveler {
    private dna: string;
    private position: number;
    
    constructor(dna: string) {
        this.dna = dna;
        this.position = 0;
    }
    
    public getCurrentNucleotide(): string {
        return this.dna[this.position];
    }
    
    public moveForward(steps: number): void {
        this.position += steps;
    }
    
    public moveBackward(steps: number): void {
        this.position -= steps;
    }
    
    public getPosition(): number {
        return this.position;
    }
}