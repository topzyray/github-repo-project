import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Octokit } from "octokit";
import { NavLink } from "react-router-dom";

const octokit = new Octokit({
  auth: import.meta.env.VITE_TOKEN,
});

const RepositoryDetails = () => {
  const [search, setSearch] = useState("");
  const [repo, setRepo] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const fetchRepo = async () => {
      try {
        setLoading(true);
        const response = await octokit.request("GET /repos/{owner}/{repo}", {
          owner: "topzyray",
          repo: id,
          headers: {
            "X-GitHub-Api-Version": "2022-11-28",
          },
        });
        if (!response) {
          setError("An error occurred.");
          return;
        }
        setLoading(false);
        setRepo(response.data);
      } catch (error) {
        console.error("Error fetching repositories: ", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRepo();
  }, []);

  console.log(repo);

  return (
    <div className="w-full mt-6 py-4 lg:py-10 px-6 md:px-10 lg:px-36">
      <div className="flex flex-col gap-5 max-w-3xl mx-auto">
        <h1 className="text-2xl sm:text-3xl md:text-4xl text-center font-semibold leading-tight md:leading-[58px]">
          Repository Details Page
        </h1>

        {repo && (
          <div className="flex flex-col md:flex-row gap-4 h-full">
            {/* Owner's information */}
            <div>
              <h3 className="font-semibold text-base sm:text-lg underline">
                Owner's Information:
              </h3>
              <div className="flex items-center gap-4">
                <img
                  src={repo.owner.avatar_url}
                  alt={repo.owner.login}
                  className="w-[3rem] rounded-full"
                />
                <div>
                  Name:
                  <Link to={repo.owner.html_url}>
                    <p className="font-bold hover:underline">
                      {repo.owner.login}
                    </p>
                  </Link>
                </div>
              </div>
            </div>

            {/* Repository information */}
            <div className="md:border-l-2 md:border-[#2c2727] md:pl-6 space-y-4">
              <h3 className="font-semibold text-base sm:text-lg underline">
                Repo Information:
              </h3>
              <div className="flex flex-col gap-3">
                <p>
                  Name: <span>{repo.name}</span>
                </p>
                <p>
                  Visibilty: <span>{repo.visibility}</span>
                </p>
                <p>
                  Fork: <span>{repo.forks_count}</span>
                </p>
                <p>
                  Description: <span>{repo.description}</span>
                </p>
                <p>
                  Date Created: <span>{repo.created_at}</span>
                </p>
                <p>
                  Date Updated: <span>{repo.updated_at}</span>
                </p>
                <p>
                  Date Pushed: <span>{repo.pushed_at}</span>
                </p>
              </div>
            </div>
          </div>
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
      </div>

      <Link to="/" className="hover:underline">
        Back to Repo Lists
      </Link>
    </div>
  );
};

export default RepositoryDetails;
