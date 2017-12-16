var stock = {
    insert:'INSERT INTO StockDR(StockName, Date, OpenPrice, ClosePrice, HighPrice, LowPrice, TotalTurnover, Volume, Industry, Sector) VALUES (?,?,?,?,?,?,?,?,?,?);'
};

module.exports = stock;