import { useQuery } from '@tanstack/react-query';

interface GithubStarsRes {
  stargazers_count: number;
}

const fetchGithubStars = async (
  githubName: string,
  repoName: string
): Promise<GithubStarsRes> => {
  const response = await fetch(
    `https://api.github.com/repos/${githubName}/${repoName}`
  );
  if (!response) {
    throw new Error('Failed to fetch, try again');
  }
  return response.json();
};

export const useGithubStars = (githubName: string, repoName: string) => {
  const { data, isLoading, isPending, error } = useQuery({
    queryKey: ['github stars', githubName, repoName],
    queryFn: () => fetchGithubStars(githubName, repoName),
  });

  return {
    stars: data?.stargazers_count ?? 0,
    isLoading,
    isPending,
    error: error as Error | null,
  };
};
