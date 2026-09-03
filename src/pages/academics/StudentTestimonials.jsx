import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../../components/PageHeader';
import Seo from '../../components/Seo';
import { SearchIcon, QuoteIcon } from '../../components/icons';
import { DEPARTMENTS, TESTIMONIALS_DATA, getTestimonialsByDepartment } from '../../data/testimonials';

export default function StudentTestimonials() {
  const [selectedDept, setSelectedDept] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const departmentTestimonials = useMemo(() => {
    return getTestimonialsByDepartment(selectedDept);
  }, [selectedDept]);

  const filteredTestimonials = useMemo(() => {
    if (!searchQuery.trim()) return departmentTestimonials;
    const q = searchQuery.toLowerCase().trim();
    return departmentTestimonials.filter(
      (t) =>
        t.name.toLowerCase().includes(q) ||
        t.programme.toLowerCase().includes(q) ||
        t.departmentName.toLowerCase().includes(q) ||
        t.quote.toLowerCase().includes(q)
    );
  }, [departmentTestimonials, searchQuery]);

  return (
    <>
      <Seo
        title="Student Testimonials"
        description="Hear authentic student experiences and alumni testimonials from the Departments of Commerce, Management, Science, and Arts at Christ College Pune."
      />
      <PageHeader
        title="Student Testimonials"
        breadcrumbs={[{ label: 'Student Testimonials' }]}
      />

      <section className="mx-auto max-w-[1200px] px-6 py-12">
        {/* Intro */}
        <div className="max-w-3xl">
          <p className="text-base text-cc-text-body leading-relaxed">
            Discover firsthand experiences and reflections from students and alumni across our academic departments.
            Learn how holistic education, dedicated faculty mentorship, modern facilities, and vibrant campus life at
            Christ College Pune shape personal and professional success.
          </p>
        </div>

        {/* Department Tabs */}
        <div className="mt-8 flex flex-wrap gap-2 border-b border-cc-gray-200 pb-4">
          {DEPARTMENTS.map((dept) => {
            const count =
              dept.key === 'all'
                ? TESTIMONIALS_DATA.length
                : TESTIMONIALS_DATA.filter((t) => t.department === dept.key).length;
            const isActive = selectedDept === dept.key;

            return (
              <button
                key={dept.key}
                type="button"
                onClick={() => {
                  setSelectedDept(dept.key);
                  setSearchQuery('');
                }}
                className={`flex items-center gap-2 rounded-cc-pill px-4 py-2 text-xs font-semibold transition-all ${
                  isActive
                    ? 'bg-cc-primary text-white shadow-sm'
                    : 'bg-cc-bg-surface text-cc-text-body hover:bg-cc-gray-100 hover:text-cc-text-heading border border-cc-gray-200'
                }`}
              >
                <span>{dept.label}</span>
                <span
                  className={`rounded-full px-2 py-0.5 text-[10px] ${
                    isActive ? 'bg-white/20 text-white' : 'bg-cc-gray-200 text-cc-text-muted-light'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Filter bar & count */}
        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-xl font-bold text-cc-text-heading">
              {DEPARTMENTS.find((d) => d.key === selectedDept)?.name || 'All Testimonials'}
            </h2>
            <p className="text-xs text-cc-text-muted-light mt-0.5">
              Showing {filteredTestimonials.length} of {departmentTestimonials.length} student reflections
            </p>
          </div>

          <div className="relative w-full sm:w-80">
            <SearchIcon
              width={16}
              height={16}
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-cc-text-muted-light"
            />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by student name, programme, keyword..."
              className="w-full rounded-cc-pill border border-cc-gray-200 bg-white py-2 pl-9 pr-4 text-xs text-cc-text-heading placeholder-cc-text-muted-light focus:border-cc-primary focus:outline-none"
            />
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredTestimonials.map((item) => (
            <div
              key={item.id}
              className="flex flex-col justify-between rounded-cc-lg border border-cc-gray-200 bg-cc-bg-surface p-6 shadow-cc-xs transition-shadow hover:shadow-cc-sm"
            >
              <div>
                {/* Quote Header */}
                <div className="flex items-center justify-between gap-2">
                  <span className="inline-block rounded-cc-pill bg-cc-primary/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-cc-primary">
                    {item.departmentName}
                  </span>
                  <QuoteIcon width={18} height={18} className="text-cc-gold opacity-60" />
                </div>

                {/* Quote Body */}
                <p className="mt-4 text-sm text-cc-text-body leading-relaxed italic">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              {/* Student Profile Footer */}
              <div className="mt-6 border-t border-cc-gray-200/60 pt-4 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 min-w-0">
                  <img
                    src={item.photo}
                    alt={item.name}
                    className="h-12 w-12 shrink-0 rounded-full object-cover border border-cc-gray-200 shadow-sm"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                  <div className="min-w-0">
                    <h3 className="text-sm font-bold text-cc-text-heading truncate">
                      {item.name}
                    </h3>
                    <p className="text-xs text-cc-text-muted-light truncate">
                      {item.programme}
                    </p>
                  </div>
                </div>

                <Link
                  to={item.departmentPath}
                  className="shrink-0 text-[11px] font-semibold text-cc-primary hover:text-cc-primary-dark hover:underline"
                >
                  Dept &rarr;
                </Link>
              </div>
            </div>
          ))}

          {filteredTestimonials.length === 0 && (
            <div className="col-span-full rounded-cc-lg border border-dashed border-cc-gray-200 p-12 text-center text-sm text-cc-text-muted-light bg-cc-bg-surface">
              No testimonials found matching &ldquo;{searchQuery}&rdquo;.
            </div>
          )}
        </div>
      </section>
    </>
  );
}
