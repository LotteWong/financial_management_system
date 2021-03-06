package com.example.financial_system.dao;

import com.example.financial_system.entity.User;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * (User)表数据库访问层
 *
 * @author linqx
 * @since 2020-06-16 15:17:23
 */
@Mapper
@Repository 
public interface UserDao {

    /**
     * 通过ID查询单条数据
     *
     * @param id 主键
     * @return 实例对象
     */
    User queryById(Integer id);

    /**
     * 查找所有记录
     *
     * @return 对象列表
     */
    List<User> queryAll();

    /**
     * 新增数据
     *
     * @param user 实例对象
     * @return 影响行数
     */
    int insert(User user);

    /**
     * 修改数据
     *
     * @param user 实例对象
     * @return 影响行数
     */
    int update(User user);

    /**
     * 通过主键删除数据
     *
     * @param id 主键
     * @return 影响行数
     */
    int deleteById(Integer id);
    
    /**
     * 选择性插入数据
     *
     * @param user 实例对象
     * @return 影响行数
     */
    int insertSelective(User user);
    
    /**
     * 返回表行数
     *
     * @return 返回表行数
     */
    Integer count();

    /**
     *  通过用户名查询用户
     *
     *  @paran username 用户名
     *  @return 用户
     */
    User queryByUsername(String username);

    /**
     * 通过用户id绑定普通用户角色
     */
    void insertUserGeneralRole(Integer id);

    /**
     * 根据用户id查询角色id列表
     */
    List<Integer> selectRoleIdListByUserId(Integer userId);

}