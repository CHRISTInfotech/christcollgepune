import PageHeader from '../../components/PageHeader';
import Seo from '../../components/Seo';
import PdfFlipBook from '../../components/PdfFlipBook';
import examinationPolicyPdf from '../../assets/examination/examination-policy.pdf';

export default function ExaminationPolicy() {
  return (
    <>
      <Seo
        title="Examination Policy"
        description="Official Examination Policy document of Christ College, Pune governing assessment structures, continuous internal assessments, and university examinations."
      />
      <PageHeader
        title="Examination Policy"
        breadcrumbs={[{ label: 'Examination' }, { label: 'Examination Policy' }]}
      />

      <section className="mx-auto max-w-[1200px] px-6 py-12">
        <PdfFlipBook fileUrl={examinationPolicyPdf} title="Examination Policy" />
      </section>
    </>
  );
}
