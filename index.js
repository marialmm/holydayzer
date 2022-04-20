import express from "express";
import cors from "cors";

const app = express();

app.use(cors());

const holidays = [
    { date: "1/1/2022", name: "Confraternização mundial" },
    { date: "1/3/2022", name: "Carnaval" },
    { date: "4/17/2022", name: "Páscoa" },
    { date: "4/21/2022", name: "Tiradentes" },
    { date: "5/1/2022", name: "Dia do trabalho" },
    { date: "6/16/2022", name: "Corpus Christi" },
    { date: "9/7/2022", name: "Independência do Brasil" },
    { date: "10/12/2022", name: "Nossa Senhora Aparecida" },
    { date: "11/2/2022", name: "Finados" },
    { date: "11/15/2022", name: "Proclamação da República" },
    { date: "12/25/2022", name: "Natal" }
];

app.get("/holidays", (req, res) => {
    res.send(holidays);
});

app.get("/is-today-holiday", (req, res) =>{
    let today = new Date();
    today = today.toLocaleDateString("en");
    let message = "Não, hoje não é feriado";
    holidays.forEach((holiday) =>{
        if(today === holiday.date){
            message = `Sim, hoje é ${holiday.name}`
        }
    });

    res.send(message);
});

app.get("/holidays/:idMonth", (req, res) =>{
    const month = req.params.idMonth;
    const monthHolidays = [];
    holidays.forEach((holiday) =>{
        if(month === holiday.date.split("/")[0]){
            monthHolidays.push(holiday);
        }
    });

    res.send(monthHolidays);

})

app.listen(5000);