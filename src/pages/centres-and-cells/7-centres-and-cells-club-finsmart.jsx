import ClubPage from '../../components/ClubPage';
import finsmart1 from '../../assets/images/gallery/club-finsmart/1.jpg';
import dfs1 from '../../assets/images/gallery/finsmart-digital-financial-safety/1.jpg';
import dfs2 from '../../assets/images/gallery/finsmart-digital-financial-safety/2.jpg';
import dfs3 from '../../assets/images/gallery/finsmart-digital-financial-safety/3.jpg';
import dfs4 from '../../assets/images/gallery/finsmart-digital-financial-safety/4.jpg';

const DFS_IMAGES = [dfs1, dfs2, dfs3, dfs4];

export default function FinSmartClub() {
  return (
    <ClubPage
      name="FinSmart Club"
      seoDescription="FinSmart Club, Department of Commerce at Christ College, Pune — introducing students to trading, financial markets and responsible money management."
      tagline="Department of Commerce — Where Strategy and Curiosity Meet Financial Clarity"
      about="FinSmart Club introduces students to the fundamentals of trading, financial markets, financial independence and current affairs, helping them transform curiosity into financial confidence through interactive sessions and real-world market insights."
      images={[finsmart1]}
      events={[
        {
          title: 'Session on Trading',
          description: 'FinSmart Club organised an informative session on trading for BCom students, conducted by Mrs Sandeep Kaur. The session introduced students to the basics of trading, market trends, and technical analysis — chart reading, bullish and bearish markets, and trading strategies used in financial markets.',
        },
        {
          title: 'Digital Financial Safety and Responsible Money Management',
          description: 'The Financial Literacy Centre of the Department of Commerce organised a session on "Digital Financial Safety and Responsible Money Management". The session focused on creating awareness about digital financial scams, budgeting, responsible money management, banking practices, credit facilities, loan applications, and the importance of maintaining a good CIBIL score. The session highlighted key financial principles — patience, discipline, long-term investment, and sustainable wealth creation — equipping students with practical knowledge to make safe, informed, and responsible financial decisions.',
          images: DFS_IMAGES,
        },
      ]}
    />
  );
}
