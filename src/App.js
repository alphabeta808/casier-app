// import Navigation from "./components/Navigation";
import './index.css';

function App() {
  return (
    <div className="dashboard text-white flex h-screen">
      <div className="aside side-bar w-1/5 bg-orange-500">
        <div className="border-b-2 border-slate-700 pb-5">
          <h1 className='px-5 pt-5 text-xl'>Dashboard</h1>
        </div>
        <ul className="menu flex flex-col">
          <li><a href="#">Barang</a></li>
          <li><a href="#">Penjualan</a></li>
          <li><a href="#">Pembelian</a></li>
          <li><a href="#">Supplier</a></li>
          <li><a href="#">Laporan Penjualan</a></li>
          <li><a href="#">Laporan Pembelian</a></li>
        </ul>
      </div>
      <div className="aside w-4/5 bg-green-500">
        <div className="header flex justify-between px-5 pt-5 border-b-2 border-slate-700 pb-5">
          <h1>Toko Alfan</h1>
          <nav>
            <ul className="flex">
              <li className='px-5'><a href="#">Users</a></li>
              <li><a href="#">Settings</a></li>
            </ul>
          </nav>
        </div>
      </div>

    </div>
  );
}

export default App;
