export interface IstockMarketData {
  symbol: string;
  name: string;
  price: number;
  profit: number;
  isProfit: boolean;
}

export interface IstockIndustryData {
  industry: string;
  imgUrl: string;
  profit: number;
  isProfit: boolean;
}

export interface IstockDividenData {
  stockSymbol: string;
  amount: number;
}

export interface IstockEarningsData {
  stockSymbol: string;
  company: string;
  epsEstimate: number;
  actualEps: number;
  suprise: boolean;
  epsYearAgo: number;
  changeFromLast: number;
  fiscalPeriod: string;
}

export interface IstockIndustiresData {
  name: string;
  profit: number;
  isProfit: boolean;
  imgUrl: string;
}
