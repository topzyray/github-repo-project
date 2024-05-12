import Tope from "/src/assets/images/tope.png";
import { Octokit } from "octokit";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const octokit = new Octokit({
  auth: import.meta.env.VITE_TOKEN,
});

const Home = () => {
  const [search, setSearch] = useState("");
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 20;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = repos.slice(firstIndex, lastIndex);
  const nPage = Math.ceil(repos.length / recordsPerPage);
  const numbers = [...Array(nPage + 1).keys()].slice(1);

  const prevPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const nextPage = () => {
    if (currentPage !== nPage) {
      setCurrentPage(currentPage + 1);
    }
  };
  const changeCurrentPage = (id) => {
    setCurrentPage(id);
  };

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        setLoading(true);
        const response = await octokit.request("GET /user/repos", {
          headers: {
            "X-GitHub-Api-Version": "2022-11-28",
          },
        });
        if (!response) {
          setError("An error occurred.");
          return;
        }
        setLoading(false);
        setRepos(response.data);
      } catch (error) {
        console.error("Error fetching repositories: ", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, [currentPage]);

  return (
    <>
      {/* Hero */}
      <div className="w-full py-4 lg:py-10 px-6 md:px-10 lg:px-36">
        <div className="w-full flex flex-1 flex-col md:flex-row md:justify-evenly md:items-center gap-3">
          <div className="max-w-4xl flex flex-col md:gap-8 py-4">
            <div className="flex flex-col justify-end gap-5">
              <h1 className="text-[25px] sm:text-[30px] md:text-[35px] lg:text-[55px] text-center md:text-left font-semibold ">
                My name is Tope Taiwo.
              </h1>
              <p className="text-lg md:text-3xl text-center md:text-left font-semibold">
                Welcome to my Github Repository Page
              </p>
            </div>
          </div>

          <div className="mx-auto">
            <img
              src={Tope}
              className="w-[15rem]  lg:w-[20rem] scale-x-[-1] rounded-[20%] shadow-2xl"
            />
          </div>
        </div>
      </div>

      <hr className="w-full border border-[#666666]" />

      {/* Repository Lists */}
      <div className="w-full mx-auto py-6 px-6 md:px-10 lg:px-28">
        <div className="w-full mx-auto space-y-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl text-center font-semibold leading-tight md:leading-[58px]">
            Repository Lists
          </h1>

          {repos && (
            <div className="bg-white py-2 px-3 rounded-md inline-block w-full max-w-[20rem]">
              <input
                type="search"
                placeholder="Search"
                className="w-full bg-transparent outline-none"
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          )}

          <div className="w-full h-full overflow-x-auto pr-3 md:pr-3 lg:pr-5 ">
            {repos && (
              <table className="w-full table-auto border-spacing-1 border border-[#666666] mb-4">
                <thead className="bg-[#E4E4E4] text-text text-base font-bold">
                  <tr>
                    <th className="border border-[#666666] py-1.5 px-2 text-left">
                      Id
                    </th>
                    <th className="border border-[#666666] py-1.5 px-2 text-left">
                      Repo Name
                    </th>
                    <th className="border border-[#666666] py-1.5 px-2 text-left">
                      Owner
                    </th>
                    <th className="border border-[#666666] py-1.5 px-2 text-left">
                      Forks
                    </th>
                    <th className="border border-[#666666] py-1.5 px-2 text-left">
                      Visibility
                    </th>
                    <th className="border border-[#666666] py-1.5 px-2 text-left">
                      Created At
                    </th>
                    <th className="border border-[#666666] py-1.5 px-2 text-left">
                      Last Updated
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {records
                    .filter((repo) => {
                      return search.toLocaleLowerCase() === ""
                        ? repo
                        : repo.name
                            .toLocaleLowerCase()
                            .includes(search.toLocaleLowerCase());
                    })
                    .map((repo, index) => (
                      <tr
                        key={repo.id}
                        className={`${
                          index % 2 === 0 ? "bg-[#E4E4E4]" : "bg-white"
                        } text-base font-normal`}
                      >
                        <td className="border border-[#666666] py-1.5 px-2">
                          {repo.id}
                        </td>
                        <td className="border border-[#666666] py-1.5 px-2 hover:underline text-primary hover:text-primary-light font-semibold">
                          <NavLink to={`/repo/${repo.name}`}>
                            {repo.name}
                          </NavLink>
                        </td>
                        <td className="border border-[#666666] py-1.5 px-2">
                          {repo.owner.login}
                        </td>
                        <td className="border border-[#666666] py-1.5 px-2">
                          {repo.forks_count}
                        </td>
                        <td className="border border-[#666666] py-1.5 px-2">
                          {repo.visibility}
                        </td>
                        <td className="border border-[#666666] py-1.5 px-2">
                          {repo.created_at}
                        </td>
                        <td className="border border-[#666666] py-1.5 px-2">
                          {repo.updated_at}
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            )}

            {loading && (
              <em className="block text-base md:text-xl text-center mx-auto animate-pulse">
                Loading... Please wait...
              </em>
            )}

            {error && (
              <em className="block text-base md:text-xl text-center mx-auto">
                {error}
              </em>
            )}

            {repos && (
              <div className="mt-6 mb-6">
                <nav>
                  <ul className="flex flex-wrap justify-center items-center gap-2 text-sm">
                    <li>
                      <NavLink
                        to="#"
                        className={`btn text-primary ${
                          currentPage === 1 ? "hidden" : "btn-light"
                        }`}
                        onClick={prevPage}
                      >
                        Prev
                      </NavLink>
                    </li>
                    {numbers.map((number, i) => (
                      <li
                        key={i}
                        onClick={() => changeCurrentPage(number)}
                        className={`btn ${
                          currentPage === number ? "btn-primary" : "btn-light"
                        } cursor-pointer`}
                      >
                        <NavLink to="#" className="">
                          {number}
                        </NavLink>
                      </li>
                    ))}
                    <li>
                      <NavLink
                        to="#"
                        className={`btn ${
                          currentPage === nPage ? "hidden" : "btn-light"
                        }`}
                        onClick={nextPage}
                      >
                        {currentPage === nPage ? "Last" : "Next"}
                      </NavLink>
                    </li>
                  </ul>
                </nav>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
