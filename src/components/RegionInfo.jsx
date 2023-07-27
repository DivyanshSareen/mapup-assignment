import { Card, Typography } from "antd";
import { useSelector } from "react-redux";

const { Title, Paragraph } = Typography;

function RegionInfo() {
  const form = useSelector((state) => state.form);
  console.log(form.RegionDetails);
  return (
    <Card>
      <Typography>
        <Paragraph>
          <Title level={5} style={{ margin: "2px" }}>
            Currency
          </Title>
          {form?.regionDetails?.currency?.symbol}
          {form?.regionDetails?.currency?.code}
          <Title level={5} style={{ margin: "2px" }}>
            Units
          </Title>
          Speed:
          {form?.regionDetails?.units?.speed}
          <br />
          Distance:
          {form?.regionDetails?.units?.distance} <br />
          Volume:
          {form?.regionDetails?.units?.volume}
          <Title level={5} style={{ margin: "2px" }}>
            Timezone
          </Title>
          {form?.regionDetails?.timezone}
        </Paragraph>
      </Typography>
    </Card>
  );
}

export default RegionInfo;
