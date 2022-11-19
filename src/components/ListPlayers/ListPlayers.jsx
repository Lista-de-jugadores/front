import './ListPlayers.css';
import CardPlayer from '../CardPlayer/CardPlayer';

const ListPlayers = () => {
  const players = [
    {
      "_id": ("608c3386ef1f854beb5fe29c"),
      "id": (11),
      "nickname": "iñmfdpd",
      "status": "fqfwt ikpxov",
      "balance": (533752),
      "avatar": "https://drive.google.com/thumbnail?id=1ZhFz6JMOtT3107w-z2KuO0PZMOKEzIYx"
    },
    {
      "_id": ("608c3386ef1f854beb5fe276"),
      "id": (21),
      "nickname": "hai jabwbsp",
      "status": "hcpqws jyufm",
      "balance": (829806),
      "avatar": "https://drive.google.com/thumbnail?id=1Wuh2EYq9-txwdlUqVt82zm9egwXCMlhh"
    },
    {
      "_id": ("608c3386ef1f854beb5fe298"),
      "id": (20),
      "nickname": "auc fjbkjyd",
      "status": "tdge lbcakogp",
      "balance": (843751),
      "avatar": "https://drive.google.com/thumbnail?id=16wM4CZgYPCCiGmHxLmMbAXG7BkBcybH-"
    },
    {
      "_id": ("608c3386ef1f854beb5fe278"),
      "id": (49),
      "nickname": "gskkmqf",
      "status": "echqi xpñqdu",
      "balance": (308688),
      "avatar": "https://drive.google.com/thumbnail?id=17fBzEwLjVC4wbHBi1O64PA-D-i8G_Z4b"
    },
    {
      "_id": ("608c3386ef1f854beb5fe2ab"),
      "id": (45),
      "nickname": "fumgxfd",
      "status": "geblup hhotp",
      "balance": (230491),
      "avatar": "https://drive.google.com/thumbnail?id=1fpl6FOG7Gi-X4oHH-dAm3b0UGDYJE9Jr"
    },
    {
      "_id": ("608c3386ef1f854beb5fe2b0"),
      "id": (30),
      "nickname": "ñszuqiq",
      "status": "pqln spqwnrgy",
      "balance": (571646),
      "avatar": "https://drive.google.com/thumbnail?id=1XAO68EZU0CfytEmqr5OYaPkP52RRewd6"
    },
    {
      "_id": ("608c3386ef1f854beb5fe2b7"),
      "id": (167),
      "nickname": "hufvwmu",
      "status": "nwoj sxmtrzbe",
      "balance": (16056),
      "avatar": "https://drive.google.com/thumbnail?id=1FvgHhPmYNwruvKSjok1dp-ikpKVD2O5z"
    },
    {
      "_id": ("608c3386ef1f854beb5fe2e4"),
      "id": (164),
      "nickname": "xmdemyu",
      "status": "tdge lbcakogp",
      "balance": (420425),
      "avatar": "https://drive.google.com/thumbnail?id=1gqJ8yhqsmyQ5sJcLIFGt-DmN_5mDyBu-"
    },
    {
      "_id": ("608c3386ef1f854beb5fe2f4"),
      "id": (133),
      "nickname": "zhkqglf",
      "status": "zdxram lfzñy",
      "balance": (284808),
      "avatar": "https://drive.google.com/thumbnail?id=1N_68Jhs4pM3i8Njj3teLdaOVRu9KQHbK"
    },
    {
      "_id": ("608c3386ef1f854beb5fe301"),
      "id": (295),
      "nickname": "tynlqrn",
      "status": "wcnzmn zxrep",
      "balance": (79849),
      "avatar": "https://drive.google.com/thumbnail?id=1XAO68EZU0CfytEmqr5OYaPkP52RRewd6"
    },
    {
      "_id": ("608c3386ef1f854beb5fe303"),
      "id": (306),
      "nickname": "qnx xbaueeg",
      "status": "nuaq ldzdñils",
      "balance": (343458),
      "avatar": "https://drive.google.com/thumbnail?id=1fpl6FOG7Gi-X4oHH-dAm3b0UGDYJE9Jr"
    },
    {
      "_id": ("608c3386ef1f854beb5fe27b"),
      "id": (33),
      "nickname": "mpg kthroip",
      "status": "cixd vrojdkyt",
      "balance": (512936),
      "avatar": "https://drive.google.com/thumbnail?id=1wy_udY0W2rebTfKDYVClfAbWewWqfzmd"
    },
    {
      "_id": ("608c3386ef1f854beb5fe316"),
      "id": (371),
      "nickname": "vjx mlcrmfñ",
      "status": "vqhev enjhfd",
      "balance": (813847),
      "avatar": "https://drive.google.com/thumbnail?id=1TUfAaVfZgGee0UKQK8bxJziDKc31Xdet"
    },
    {
      "_id": ("608c3386ef1f854beb5fe31b"),
      "id": (116),
      "nickname": "jvvxqjq",
      "status": "aywoc ñonuge",
      "balance": (106757),
      "avatar": "https://drive.google.com/thumbnail?id=1fpl6FOG7Gi-X4oHH-dAm3b0UGDYJE9Jr"
    },
    {
      "_id": ("608c3386ef1f854beb5fe28e"),
      "id": (41),
      "nickname": "aio efyubfx",
      "status": "ljñkv bmfwuq",
      "balance": (624491),
      "avatar": "https://drive.google.com/thumbnail?id=1ZhFz6JMOtT3107w-z2KuO0PZMOKEzIYx"
    },
    {
      "_id": ("608c3386ef1f854beb5fe33f"),
      "id": (342),
      "nickname": "hhfbixlbur",
      "status": "azwan ubdehk",
      "balance": (474115),
      "avatar": "https://drive.google.com/thumbnail?id=17fBzEwLjVC4wbHBi1O64PA-D-i8G_Z4b"
    },
    {
      "_id": ("608c3386ef1f854beb5fe345"),
      "id": (101),
      "nickname": "qzwwxmv",
      "status": "azwan ubdehk",
      "balance": (824554),
      "avatar": "https://drive.google.com/thumbnail?id=1N_68Jhs4pM3i8Njj3teLdaOVRu9KQHbK"
    },
    {
      "_id": ("608c3386ef1f854beb5fe294"),
      "id": (35),
      "nickname": "zlxalyn",
      "status": "echqi xpñqdu",
      "balance": (290926),
      "avatar": "https://drive.google.com/thumbnail?id=1wy_udY0W2rebTfKDYVClfAbWewWqfzmd"
    },
    {
      "_id": ("608c3386ef1f854beb5fe29e"),
      "id": (18),
      "nickname": "asdfdsa",
      "status": "zdczs omedat",
      "balance": (849666),
      "avatar": "https://drive.google.com/thumbnail?id=1XAO68EZU0CfytEmqr5OYaPkP52RRewd6"
    },
    {
      "_id": ("608c3386ef1f854beb5fe2a3"),
      "id": (50),
      "nickname": "xhy dhzñffq",
      "status": "scpñ gfwyxggd",
      "balance": (216596),
      "avatar": "https://drive.google.com/thumbnail?id=1TUfAaVfZgGee0UKQK8bxJziDKc31Xdet"
    },
    {
      "_id": ("608c3386ef1f854beb5fe34f"),
      "id": (236),
      "nickname": "adsfsda",
      "status": "uymgk ñqrswx",
      "balance": (459958),
      "avatar": "https://drive.google.com/thumbnail?id=1fpl6FOG7Gi-X4oHH-dAm3b0UGDYJE9Jr"
    },
    {
      "_id": ("608c3386ef1f854beb5fe35f"),
      "id": (157),
      "nickname": "ohr cocfnho",
      "status": "axgh ocayamle",
      "balance": (508601),
      "avatar": "https://drive.google.com/thumbnail?id=16wM4CZgYPCCiGmHxLmMbAXG7BkBcybH-"
    },
    {
      "_id": ("608c3386ef1f854beb5fe36d"),
      "id": (82),
      "nickname": "lsinñeq",
      "status": "ufgj lklknqnz",
      "balance": (874190),
      "avatar": "https://drive.google.com/thumbnail?id=1wy_udY0W2rebTfKDYVClfAbWewWqfzmd"
    },
    {
      "_id": ("608c3386ef1f854beb5fe2a8"),
      "id": (14),
      "nickname": "dcc gdodkñg",
      "status": "odrnuh ixdta",
      "balance": (643123),
      "avatar": "https://drive.google.com/thumbnail?id=1XAO68EZU0CfytEmqr5OYaPkP52RRewd6"
    },
    {
      "_id": ("608c3386ef1f854beb5fe2bf"),
      "id": (300),
      "nickname": "ckñowwl",
      "status": "lfhp rkhqafgb",
      "balance": (522766),
      "avatar": "https://drive.google.com/thumbnail?id=1gqJ8yhqsmyQ5sJcLIFGt-DmN_5mDyBu-"
    }
  ]
  return (
    <>
      <div className='container-listplayers'>
        {players &&
          players.map(
            (player) => (
              <CardPlayer
                key={player.id}
                id={player.id}
                name={player.nickname}
                status={player.status}
                balance={player.balance}
                avatar={player.avatar}
              />
            )
          )
        }

      </div>
    </>
  );
};

export default ListPlayers;
