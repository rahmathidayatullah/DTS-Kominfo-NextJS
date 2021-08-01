import Layout from "../../../components/templates/layout.component";
import Tambah from "../../../components/content/partnership/manajemen-mitra/tambahMitra";

export default function KerjaSamaPage() {
  return (
    <>
      <div className="d-flex flex-column flex-root">
        <Layout title="Dashboard Publikasi">
          <Tambah />
        </Layout>
      </div>
    </>
  );
}