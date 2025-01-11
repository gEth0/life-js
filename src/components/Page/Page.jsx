import Grid from "../Grid/Grid";
import SelectDate from "../SelectDate/SelectDate";
import "./Page.css";
import Descritpion from "../Description/Description";
import Statistics from "../Statistics/Statistics";
import DownloadPDF from "../DownloadPDF/DownloadPDF";

const Page = ({ date, setDate, setValues, values }) => {
    return (
        <div className="page-container">
            <Descritpion />
            <SelectDate date={date} setDate={setDate} />
            <Grid date={date} setValues={setValues} values={values} />
            <Statistics date={date} values={values} />
        </div>
    );
};

export default Page;