import { Html5QrcodeScanner } from "html5-qrcode";
import { useEffect, useRef, useState } from "react";
import { LuScanFace } from "react-icons/lu";
import { Button } from "@/components/ui/button";

const Barcode = () => {
  const [barCodeOpen, setBarCodeOpen] = useState(false);
  const [scanResult, setScanResult] = useState<string | null>(null);
  const scannerRef = useRef<Html5QrcodeScanner | null>(null);

  const handleOpenBarCode = () => setBarCodeOpen(true);
  const handleCloseBarCode = () => setBarCodeOpen(false);
  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (barCodeOpen) {
      timeout = setTimeout(() => {
        if (!document.getElementById("reader")) return; // Ensure element exists
        console.log("Scanner initialized");
        scannerRef.current = new Html5QrcodeScanner(
          "reader",
          { fps: 10, qrbox: { width: 250, height: 250 } },
          false
        );

        scannerRef.current?.render(
          (decodedText: string) => {
            setScanResult(decodedText);
            handleCloseBarCode();
          },
          (errorMessage: string) => {
            console.log(errorMessage);
          }
        );
      }, 300); // Delay to ensure the dialog is rendered
    }

    return () => {
      clearTimeout(timeout);
      if (scannerRef.current) {
        scannerRef.current.clear();
      }
    };
  }, [barCodeOpen]);
  return (
    <>
      <Button onClick={handleOpenBarCode}>
        <LuScanFace /> Open Scanner
      </Button>
      {scanResult && <p>Scanned Code: {scanResult}</p>}

      {barCodeOpen && <div id="reader" className="w-full min-h-96"></div>}
    </>
  );
};

export default Barcode;
