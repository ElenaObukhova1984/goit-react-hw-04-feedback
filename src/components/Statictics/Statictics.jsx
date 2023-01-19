import PropTypes from 'prop-types';
import { StatisticsTitle,StatisticsList,StatisticsItem,StatisticFeedback } from './Statistics.styled'; 

export const Statistics = ({ title, good, neutral, bad, total, positivePercentage })=>{
    return (
        <div>
            <StatisticsTitle>{title}</StatisticsTitle>
            <StatisticsList>
                <StatisticsItem>
                    <StatisticFeedback>Good: </StatisticFeedback>
                    <StatisticFeedback>{good}</StatisticFeedback>
                </StatisticsItem>
                <StatisticsItem>
                    <StatisticFeedback>Neutral: </StatisticFeedback>
                    <StatisticFeedback>{neutral}</StatisticFeedback>
                </StatisticsItem>
                <StatisticsItem>
                    <StatisticFeedback>Bad: </StatisticFeedback>
                    <StatisticFeedback>{bad}</StatisticFeedback>
                </StatisticsItem>
                <StatisticsItem>
                    <StatisticFeedback>Total: </StatisticFeedback>
                    <StatisticFeedback>{total}</StatisticFeedback>
                </StatisticsItem>
                <StatisticsItem>
                    <StatisticFeedback>Positive feedback: </StatisticFeedback>
                    <StatisticFeedback>{positivePercentage ? positivePercentage : 0}%</StatisticFeedback>
                </StatisticsItem>
            </StatisticsList>
        </div>
    )
}

Statistics.propTypes = {
    title: PropTypes.string.isRequired,
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
}

