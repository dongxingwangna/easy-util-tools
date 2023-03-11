export class Time {
    // 开始时间
    private _startTime: string;
    // 结束时间
    private _endTime: string;
    // 总计时间 秒
    private _total: number;

    get total(): number {
        return this._total;
    }

    set total(value: number) {
        this._total = value;
    }

    get startTime(): string {
        return this._startTime;
    }

    set startTime(value: string) {
        this._startTime = value;
    }

    get endTime(): string {
        return this._endTime;
    }

    set endTime(value: string) {
        this._endTime = value;
    }

    constructor(startTime: string, endTime: string, total: number) {
        this._startTime = startTime;
        this._endTime = endTime;
        this._total = total;
    }
}
