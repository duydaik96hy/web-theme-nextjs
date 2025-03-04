'use client';

import React, { useEffect, useState } from 'react';
import { Row, Col, Space, Grid, Skeleton, Divider } from "antd";
import PostListVer from '@/components/Posts/PostList/PostListVer';
import { IPost, IPostFilter } from '@/types/post';
import PostListHor from '@/components/Posts/PostList/PostListHor';
import PostListVerCenter from '@/components/Posts/PostList/PostItemVerCenter';

const { useBreakpoint } = Grid;

const HomePage = () => {
  const screens = useBreakpoint();
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState<IPost[]>([]);

  const [paginationPost, setPaginationPost] = useState({
    page_size: 6,
    current_page: 1,
    total_items: 0,
  });

  const [query, setQuery] = useState<IPostFilter>({});

  useEffect(() => {
    const fetchData = () => {
      setIsLoading(true);
      setTimeout(() => {
        const resp = {
          "success": true,
          "status": 200,
          "message": null,
          "data": {
            "data": [
              {
                "banner_images": [
                  "https://media.tapchitaichinh.vn/w1480/images/upload/2024/02/21/bds-ha-noi-17080891791471270135244.jpg"
                ],
                "title": "Miễn toàn bộ học phí cho học sinh công lập - Quyết định nức lòng dân",
                "content": "Ðón nhận thông tin này, đông đảo phụ huynh, học sinh và cán bộ, giáo viên đều thấy vui, phấn khởi bởi một phần gánh nặng tài chính được giảm bớt, tạo thêm cơ hội học tập cho các em học sinh có hoàn cảnh khó khăn. Và hơn hết, họ cảm nhận được sự quan tâm, chăm lo thiết thực của Ðảng, Nhà nước đối với sự nghiệp giáo dục. Là công nhân tại Khu công nghiệp Yên Mỹ 2 (Yên Mỹ) với mức lương thấp, chị Lê Thị Hà ở thị trấn Yên Mỹ nhiều tháng nay phải chi tiêu tiết kiệm, cắt giảm các khoản không cần thiết mới đủ trang trải chi phí cho gia đình. Hai con chị Hà, cháu lớn học lớp 8, cháu nhỏ học lớp 6 khiến gánh nặng sách vở, học phí oằn thêm lên đôi vai. Vì thế, khi biết tin học sinh trong cả nước sẽ được miễn 100% học phí bắt đầu từ năm học 2025-2026, chị Hà rất vui mừng. “Mức lương công nhân hiện nay của tôi chi tiêu cho ba mẹ con trong một tháng đã là khó, nhất là khi các con vào năm học, có rất nhiều chi phí phải lo. Học phí cũng là khoản tiền đáng kể với những gia đình có thu nhập thấp nên việc Nhà nước miễn 100% học phí cho học sinh là điều rất ý nghĩa, nhất là với người lao động như tôi”, chị Hà trải lòng.",
                "description": "Tại phiên họp Bộ Chính trị ngày 28/2 để kiểm điểm, đánh giá kết quả triển khai bước đầu tổng kết việc thực hiện Nghị quyết số 18-NQ/TW của Ban Chấp hành Trung ương về một số vấn đề về tiếp tục đổi mới, sắp xếp tổ chức bộ máy của hệ thống chính trị tinh gọn, hoạt động hiệu lực, hiệu quả, Bộ Chính trị đã quyết định thực hiện miễn toàn bộ học phí cho học sinh từ mầm non đến hết trung học phổ thông công lập trên phạm vi cả nước.",
                "views": 0,
                "keyword": "nha ban",
                "category": "kinh-te",
                "web": "https://www.google.com",
                "random_key": 0,
                "source": "https://www.google.com",
                "deleted_at": "",
                "created_at": "2024-06-17 16:22:06",
                "updated_at": "2024-06-17 17:31:19",
                "id": "6670003e4dfde8ecf1fcf3267"
              },
              {
                "banner_images": [
                  "https://media.tapchitaichinh.vn/w1480/images/upload/2024/02/21/bds-ha-noi-17080891791471270135244.jpg"
                ],
                "title": "Khởi công Dự án khu đô thị phía đông huyện Văn Giang",
                "content": "Dự án Centerville có diện tích 49,9 héc-ta, quy mô dân số là 18.300 người, với tổng vốn đầu tư gần 17.000 tỷ đồng; tọa lạc ở khu vực trung tâm xã Long Hưng, nằm giữa hai khu đô thị lớn là Ecopark và Ocean Park, tiếp giáp đường cao tốc Hà Nội – Hải Phòng và cách trung tâm Hà Nội khoảng 20km…",
                "description": "Ngày 26/2, tại xã Long Hưng (Văn Giang), Công ty cổ phần phát triển đầu tư và xây dựng Bách Giang - DCI tổ chức lễ khởi công Dự án khu đô thị phía đông huyện Văn Giang (Dự án Centerville)",
                "views": 0,
                "keyword": "nha ban",
                "category": "kinh-te",
                "web": "https://www.google.com",
                "random_key": 0,
                "source": "https://www.google.com",
                "deleted_at": "",
                "created_at": "2024-06-17 16:22:06",
                "updated_at": "2024-06-17 17:31:19",
                "id": "6670003e4dfde8ecf1fcf326"
              },
              {
                "banner_images": [
                  "https://media.tapchitaichinh.vn/w1480/images/upload/2024/02/21/bds-ha-noi-17080891791471270135244.jpg"
                ],
                "title": "Trụ sở chính của Chi cục thuế khu vực IV đặt tại tỉnh Hưng Yên",
                "content": "Theo đó, Tổng cục Thuế giảm cấp chỉ còn Cục Thuế. Cục Thuế là đơn vị thuộc Bộ Tài chính. Cục Thuế được tổ chức từ Trung ương đến địa phương theo mô hình 3 cấp, gồm: Cục Thuế (12 đơn vị); Chi cục Thuế (20 Chi cục Thuế khu vực) và Đội Thuế (350 đội Thuế liên huyện).",
                "description": "Ngày 26/2, Bộ Tài chính ban hành Quyết định số 381/QĐ-BTC về Quy định chức năng, nhiệm vụ, quyền hạn và cơ cấu tổ chức mới của Cục Thuế. ",
                "views": 0,
                "keyword": "nha ban",
                "category": "kinh-te",
                "web": "https://www.google.com",
                "random_key": 0,
                "source": "https://www.google.com",
                "deleted_at": "",
                "created_at": "2024-06-17 16:22:06",
                "updated_at": "2024-06-17 17:31:19",
                "id": "6670003e4dfde8ecf1fcf321"
              },
              {
                "banner_images": [
                  "https://mediabhy.mediatech.vn/thumb/600x360/upload/image/202503/thumbnail/82639_tiet_hoc_cua_hoc_sinh_truong_thcs_yen_phu_yen_my_19431504.jpg"
                ],
                "title": "Trụ sở chính của Chi cục thuế khu vực IV đặt tại tỉnh Hưng Yên",
                "content": "Theo đó, Tổng cục Thuế giảm cấp chỉ còn Cục Thuế. Cục Thuế là đơn vị thuộc Bộ Tài chính. Cục Thuế được tổ chức từ Trung ương đến địa phương theo mô hình 3 cấp, gồm: Cục Thuế (12 đơn vị); Chi cục Thuế (20 Chi cục Thuế khu vực) và Đội Thuế (350 đội Thuế liên huyện).",
                "description": "Ngày 26/2, Bộ Tài chính ban hành Quyết định số 381/QĐ-BTC về Quy định chức năng, nhiệm vụ, quyền hạn và cơ cấu tổ chức mới của Cục Thuế. ",
                "views": 0,
                "keyword": "nha ban",
                "category": "kinh-te",
                "web": "https://www.google.com",
                "random_key": 0,
                "source": "https://www.google.com",
                "deleted_at": "",
                "created_at": "2024-06-17 16:22:06",
                "updated_at": "2024-06-17 17:31:19",
                "id": "6670003e4dfde8ecf1fcf317"
              },
              {
                "banner_images": [
                  "https://mediabhy.mediatech.vn/thumb/600x360/upload/image/202503/thumbnail/82639_tiet_hoc_cua_hoc_sinh_truong_thcs_yen_phu_yen_my_19431504.jpg"
                ],
                "title": "Trụ sở chính của Chi cục thuế khu vực IV đặt tại tỉnh Hưng Yên",
                "content": "Theo đó, Tổng cục Thuế giảm cấp chỉ còn Cục Thuế. Cục Thuế là đơn vị thuộc Bộ Tài chính. Cục Thuế được tổ chức từ Trung ương đến địa phương theo mô hình 3 cấp, gồm: Cục Thuế (12 đơn vị); Chi cục Thuế (20 Chi cục Thuế khu vực) và Đội Thuế (350 đội Thuế liên huyện).",
                "description": "Ngày 26/2, Bộ Tài chính ban hành Quyết định số 381/QĐ-BTC về Quy định chức năng, nhiệm vụ, quyền hạn và cơ cấu tổ chức mới của Cục Thuế. ",
                "views": 0,
                "keyword": "nha ban",
                "category": "kinh-te",
                "web": "https://www.google.com",
                "random_key": 0,
                "source": "https://www.google.com",
                "deleted_at": "",
                "created_at": "2024-06-17 16:22:06",
                "updated_at": "2024-06-17 17:31:19",
                "id": "6670003e4dfde8ecf1fcf316"
              },
              {
                "banner_images": [
                  "https://mediabhy.mediatech.vn/thumb/600x360/upload/image/202503/thumbnail/82639_tiet_hoc_cua_hoc_sinh_truong_thcs_yen_phu_yen_my_19431504.jpg"
                ],
                "title": "Trụ sở chính của Chi cục thuế khu vực IV đặt tại tỉnh Hưng Yên",
                "content": "Theo đó, Tổng cục Thuế giảm cấp chỉ còn Cục Thuế. Cục Thuế là đơn vị thuộc Bộ Tài chính. Cục Thuế được tổ chức từ Trung ương đến địa phương theo mô hình 3 cấp, gồm: Cục Thuế (12 đơn vị); Chi cục Thuế (20 Chi cục Thuế khu vực) và Đội Thuế (350 đội Thuế liên huyện).",
                "description": "Ngày 26/2, Bộ Tài chính ban hành Quyết định số 381/QĐ-BTC về Quy định chức năng, nhiệm vụ, quyền hạn và cơ cấu tổ chức mới của Cục Thuế. ",
                "views": 0,
                "keyword": "nha ban",
                "category": "kinh-te",
                "web": "https://www.google.com",
                "random_key": 0,
                "source": "https://www.google.com",
                "deleted_at": "",
                "created_at": "2024-06-17 16:22:06",
                "updated_at": "2024-06-17 17:31:19",
                "id": "6670003e4dfde8ecf1fcf320"
              },
              {
                "banner_images": [
                  "https://mediabhy.mediatech.vn/thumb/600x360/upload/image/202503/thumbnail/82639_tiet_hoc_cua_hoc_sinh_truong_thcs_yen_phu_yen_my_19431504.jpg"
                ],
                "title": "Trụ sở chính của Chi cục thuế khu vực IV đặt tại tỉnh Hưng Yên",
                "content": "Theo đó, Tổng cục Thuế giảm cấp chỉ còn Cục Thuế. Cục Thuế là đơn vị thuộc Bộ Tài chính. Cục Thuế được tổ chức từ Trung ương đến địa phương theo mô hình 3 cấp, gồm: Cục Thuế (12 đơn vị); Chi cục Thuế (20 Chi cục Thuế khu vực) và Đội Thuế (350 đội Thuế liên huyện).",
                "description": "Ngày 26/2, Bộ Tài chính ban hành Quyết định số 381/QĐ-BTC về Quy định chức năng, nhiệm vụ, quyền hạn và cơ cấu tổ chức mới của Cục Thuế. ",
                "views": 0,
                "keyword": "nha ban",
                "category": "kinh-te",
                "web": "https://www.google.com",
                "random_key": 0,
                "source": "https://www.google.com",
                "deleted_at": "",
                "created_at": "2024-06-17 16:22:06",
                "updated_at": "2024-06-17 17:31:19",
                "id": "6670003e4dfde8ecf1fcf312"
              },
              {
                "banner_images": [
                  "https://mediabhy.mediatech.vn/thumb/600x360/upload/image/202503/thumbnail/82639_tiet_hoc_cua_hoc_sinh_truong_thcs_yen_phu_yen_my_19431504.jpg"
                ],
                "title": "Trụ sở chính của Chi cục thuế khu vực IV đặt tại tỉnh Hưng Yên",
                "content": "Theo đó, Tổng cục Thuế giảm cấp chỉ còn Cục Thuế. Cục Thuế là đơn vị thuộc Bộ Tài chính. Cục Thuế được tổ chức từ Trung ương đến địa phương theo mô hình 3 cấp, gồm: Cục Thuế (12 đơn vị); Chi cục Thuế (20 Chi cục Thuế khu vực) và Đội Thuế (350 đội Thuế liên huyện).",
                "description": "Ngày 26/2, Bộ Tài chính ban hành Quyết định số 381/QĐ-BTC về Quy định chức năng, nhiệm vụ, quyền hạn và cơ cấu tổ chức mới của Cục Thuế. ",
                "views": 0,
                "keyword": "nha ban",
                "category": "kinh-te",
                "web": "https://www.google.com",
                "random_key": 0,
                "source": "https://www.google.com",
                "deleted_at": "",
                "created_at": "2024-06-17 16:22:06",
                "updated_at": "2024-06-17 17:31:19",
                "id": "6670003e4dfde8ecf1fcf311"
              },
              {
                "banner_images": [
                  "https://mediabhy.mediatech.vn/thumb/600x360/upload/image/202503/thumbnail/82639_tiet_hoc_cua_hoc_sinh_truong_thcs_yen_phu_yen_my_19431504.jpg"
                ],
                "title": "Trụ sở chính của Chi cục thuế khu vực IV đặt tại tỉnh Hưng Yên",
                "content": "Theo đó, Tổng cục Thuế giảm cấp chỉ còn Cục Thuế. Cục Thuế là đơn vị thuộc Bộ Tài chính. Cục Thuế được tổ chức từ Trung ương đến địa phương theo mô hình 3 cấp, gồm: Cục Thuế (12 đơn vị); Chi cục Thuế (20 Chi cục Thuế khu vực) và Đội Thuế (350 đội Thuế liên huyện).",
                "description": "Ngày 26/2, Bộ Tài chính ban hành Quyết định số 381/QĐ-BTC về Quy định chức năng, nhiệm vụ, quyền hạn và cơ cấu tổ chức mới của Cục Thuế. ",
                "views": 0,
                "keyword": "nha ban",
                "category": "kinh-te",
                "web": "https://www.google.com",
                "random_key": 0,
                "source": "https://www.google.com",
                "deleted_at": "",
                "created_at": "2024-06-17 16:22:06",
                "updated_at": "2024-06-17 17:31:19",
                "id": "6670003e4dfde8ecf1fcf310"
              }
            ],
            "pagination": {
              "total": 12,
              "per_page": 10,
              "current_page": 1,
              "last_page": 2,
              "from": 1,
              "to": 10
            }
          }
        };
        const resp_data = resp.data.data;
        setPosts(resp_data);
        setPaginationPost({
          ...paginationPost,
          total_items: 10,
        });
        setIsLoading(false);
      }, 1500);
    };
    fetchData();
  }, [query, paginationPost.current_page]);

  return (
    <div style={{ padding: "64px 12px 24px", overflow: "hidden" }}>
      <Row gutter={0} className='w-full pb-6 border-b border-gray-300'>
        <Col span={6} className='w-full' style={{ height: '65vh', overflow: 'auto' }}>
          <Space direction="vertical" className="w-full">
            <Col xs={24} md={24}>
              {/* <h3 className="text-xl font-semibold text-center m-4">Tin nổi bật</h3> */}
              {isLoading ? (
                <Skeleton active avatar paragraph={{ rows: 4 }} />
              ) : (
                <PostListHor posts={posts} isShowDescriptionAndTime={false} />
              )}
            </Col>
          </Space>
        </Col>
        <Col span={13} className='w-full border-l border-gray-300 pr-4 pl-4' style={{ height: '65vh', overflow: 'auto' }}>
          <Space direction="vertical" className="w-full">
            <Col xs={24} md={24}>
              {/* <h3 className="text-xl font-semibold text-center m-4">{category}</h3> */}
              {isLoading ? (
                <Skeleton active avatar paragraph={{ rows: 15 }} />
              ) : posts.length > 0 ? (
                <Col>
                  <PostListVerCenter post={posts[0]} />
                </Col>
              ) : (
                <p style={{ textAlign: "center" }}>Không có bài nào</p>
              )}
            </Col>
          </Space>
        </Col>
        <Col span={5} className='w-full' style={{ height: '65vh', overflow: 'auto' }}>
          <Space direction="vertical" className="w-full border-l border-gray-300 pl-4" style={{ height: 'vh', overflow: 'auto' }}>
            <Col xs={24} md={24}>
              <img src='https://mediabhy.mediatech.vn/upload/image/202303/medium/49885_hoc_tap_hcm_300x250_2_14222303.jpg' alt='ads' />
              <Divider />
              <h3 className="text-xl font-semibold text-center m-4">Tin xem nhiều</h3>
              {isLoading ? (
                <><Skeleton active avatar paragraph={{ rows: 5 }} /><Skeleton active avatar paragraph={{ rows: 5 }} /></>
              ) : (
                <Space direction="vertical" className="w-full">
                  <PostListVer posts={posts} isShowDescriptionAndTime={false} />
                </Space>
              )}
            </Col>
          </Space>
        </Col>
      </Row>
      <Row className='pt-4'>
      </Row>
      <Row>
        <Col span={24} className='w-full mt-4'>
          <Space direction="vertical" className="w-full">
            <Col xs={24} md={24}>
              <h3 className="text-xl font-semibold text-center m-4">Tin mới nhất</h3>
              {isLoading ? (
                <><Skeleton active avatar paragraph={{ rows: 5 }} /><Skeleton active avatar paragraph={{ rows: 5 }} /></>
              ) : (
                <PostListHor posts={posts} />
              )}
            </Col>
          </Space>
        </Col>
      </Row>
    </div>
  );

};

export default HomePage;
