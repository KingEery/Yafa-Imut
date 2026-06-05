import Hero from "./components/home/hero";
import Categories from "./components/home/categories";
import JobList from  "./components/home/job-list";
import CompanyGrid from "./components/home/company"
export default function Home() {
  return (
    <>
      <Hero />
      <Categories />        
      <JobList />
      <CompanyGrid />
    </>
      
  );
}
