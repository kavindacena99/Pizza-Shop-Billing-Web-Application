import { useLocation } from "react-router-dom";
import { useRef } from "react";
import Header from "../components/Header";

function Checkout() {
  const location = useLocation();
  const selectedItems = location.state?.selectedItems || [];
  const billRef = useRef();

  const totalAmount = selectedItems.reduce((sum, item) => sum + item.total, 0);
  const tax = totalAmount * 0.10;
  const finalTotal = totalAmount + tax;

  const handlePrint = () => {
    const printContents = billRef.current.innerHTML;
    const originalContents = document.body.innerHTML;

    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
    window.location.reload();
  };

    const now = new Date();

    const date = now.toLocaleDateString();
    const time = now.toLocaleTimeString();

    const billNumber = `BILL-${Date.now()}-${Math.floor(Math.random() * 1000)}`;

  return (
    <div className="p-6">
      <Header />
        <div style={{ display:'none' }} ref={billRef}>
            <div className="text-center border-b-2 border-dashed pb-4">
                <Header />
                <p>123 Main Street,  Vavuniya<br />Hotline: 011-1234567</p>
            </div>

            <div className="mt-4 text-center text-sm text-gray-700">
                <p><strong>Date:</strong> {date} <strong>Time:</strong> {time}</p>
                <p><strong>Bill No: </strong>{billNumber}</p>
            </div>

            <div className="col-md-8">
                <table className="w-full mt-6 border col-md-10 border-collapse text-sm" style={{ marginLeft:180}}>
                <thead>
                <tr className="bg-gray-100">
                    <th className="border p-2">Item</th>
                    <th className="border p-2">Category</th>
                    <th className="border p-2">Quantity</th>
                    <th className="border p-2">Price (Rs.)</th>
                    <th className="border p-2">Total (Rs.)</th>
                </tr>
                </thead>
                <tbody>
                {selectedItems.map((item, index) => (
                    <tr key={index}>
                    <td className="border p-2">{item.name}</td>
                    <td className="border p-2">{item.category}</td>
                    <td className="border p-2">{item.quantity}</td>
                    <td className="border p-2">{item.price.toFixed(2)}</td>
                    <td className="border p-2">{item.total.toFixed(2)}</td>
                    </tr>
                ))}
                </tbody>
            </table>
            </div>

            <div className="mt-6 text-base font-medium" style={{ marginLeft:200, marginTop:15 }}>
                <p><strong>Subtotal:</strong> Rs. {totalAmount.toFixed(2)}</p>
                <p><strong>Tax (10%):</strong> Rs. {tax.toFixed(2)}</p>
                <p><strong>Total:</strong> Rs. {finalTotal.toFixed(2)}</p>
            </div>
        </div>
      <div>
        <h2 className="text-2xl font-bold mb-4"><b>Checkouts</b></h2>

        <p className="text-2xl font-semibold" style={{ marginLeft: 20 }}>
          <strong>Bill Total: Rs.</strong> {totalAmount.toFixed(2)} &nbsp;
          <strong>Taxes (10%): Rs.</strong> {tax.toFixed(2)} &nbsp;
          <strong>Total: Rs.</strong> {finalTotal.toFixed(2)}
        </p>

        {selectedItems.length === 0 ? (
          <p>No items selected.</p>
        ) : (
          <div className="space-y-4 mt-4">
            {selectedItems.map((item, index) => (
              <div
                key={index}
                className="p-4 bg-white border rounded space-y-1"
              >
                <p>
                  <strong>Food Name:</strong> {item.name} &nbsp;
                  <strong>Category:</strong> {item.category} &nbsp;
                  <strong>Price per item:</strong> Rs. {item.price}.00 &nbsp;
                  <strong>Quantity:</strong> {item.quantity} &nbsp;
                  <strong>Total:</strong> Rs. {item.total}.00
                </p>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="mt-6" style={{ margin:5 }}>
        <button
          onClick={handlePrint}
          className="btn btn-dark"
        >
          🖨️ Print the Bill
        </button>
      </div>
    </div>
  );
}

export default Checkout;
