/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

export const CardList = ({ user }) => {
  return (
    <li key={user.id}>
      <div className="flex items-center gap-5 px-5 py-3 mt-5 border border-gray-300 rounded-md bg-gray-50">
        <img
          src={user.avatar_url}
          alt={user.login}
          className="rounded-full h-14 w-14"
        />
        <a
          href={user.html_url}
          target="_blank"
          rel="noreferrer"
          className="text-lg font-bold hover:text-sky-600 hover:underline"
        >
          {user.login}
        </a>
      </div>
    </li>
  );
};

