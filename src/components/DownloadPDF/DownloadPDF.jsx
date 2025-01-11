import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

const DownloadPDF = ({ date, values }) => {
    const generatePDF = async () => {
        const doc = new jsPDF();
        const gridElement = document.querySelector(".grid-container");


        doc.setFont("helvetica", "bold");
        doc.setFontSize(16);
        doc.setTextColor(40, 40, 40);


        doc.text("Life Statistics", 20, 20);


        doc.setFont("helvetica", "normal");
        doc.setFontSize(12);
        doc.setTextColor(60, 60, 60);

        doc.text(`Date of Birth: ${date}`, 20, 30);
        doc.text(`Weeks Lived: ${values[1]}`, 20, 40);
        doc.text(`Weeks from ${date} until you turn 95: ${values[0]}`, 20, 50);


        const canvasGrid = await html2canvas(gridElement);
        const imgDataGrid = canvasGrid.toDataURL("image/png");


        const pdfWidth = doc.internal.pageSize.getWidth() - 40;
        const pdfHeight = doc.internal.pageSize.getHeight() - 70;
        const imgWidthGrid = canvasGrid.width;
        const imgHeightGrid = canvasGrid.height;
        const scaleGrid = Math.min(pdfWidth / imgWidthGrid, pdfHeight / imgHeightGrid) * 0.84;

        const scaledWidthGrid = imgWidthGrid * scaleGrid;
        const scaledHeightGrid = imgHeightGrid * scaleGrid;

        doc.addImage(imgDataGrid, "PNG", 20, 60, scaledWidthGrid, scaledHeightGrid);


        doc.setFont("helvetica", "italic");
        doc.setFontSize(10);
        doc.setTextColor(100, 100, 100);
        doc.text("developed by gEth0", 20, doc.internal.pageSize.getHeight() - 10);


        doc.save("life_statistics.pdf");
    };

    return (
        <button id="pdf-btn" onClick={generatePDF}>
            Download PDF
        </button>
    );
};

export default DownloadPDF;