/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

const CardList = ({ user }) => {
  return (
    <li key={user.id}>
      <div className="flex items-center gap-5 bg-gray-50 border border-gray-300 px-5 py-3 mt-5 rounded-md">
        <img
          src={user.avatar_url}
          alt={user.login}
          className="rounded-full h-14 w-14"
        />
        <a
          href={user.html_url}
          target="_blank"
          rel="noreferrer"
          className="font-bold text-lg text-sky-500 underline italic"
        >
          {user.login}
        </a>
      </div>
    </li>
  );
};

export default CardList;
