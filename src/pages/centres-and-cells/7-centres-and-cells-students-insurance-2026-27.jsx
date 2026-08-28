import PageHeader from '../../components/PageHeader';
import Seo from '../../components/Seo';
import PdfFlipBook from '../../components/PdfFlipBook';
import insurancePdf from '../../assets/studentlife/insurance/Students Insurance 2026-27_20260819101408.pdf';

export default function StudentsInsurance202627() {
  return (
    <>
      <Seo
        title="Students Insurance 2026-27"
        description="View or download the Christ College, Pune Students Insurance 2026-27 document covering the student insurance scheme for the academic year."
      />
      <PageHeader title="Students Insurance 2026-27" breadcrumbs={[{ label: 'Student Life' }, { label: 'Students Insurance 2026-27' }]} />

      <section className="mx-auto max-w-[1200px] px-6 py-16">
        <p className="max-w-3xl text-cc-text-body">
          Details of the student insurance scheme for the 2026&ndash;27 academic year at Christ
          College, Pune.
        </p>
        <div className="mt-6">
          <PdfFlipBook fileUrl={insurancePdf} title="Students Insurance 2026-27" />
        </div>
      </section>
    </>
  );
}
